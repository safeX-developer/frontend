import React, { useState, useRef, useEffect } from 'react';
import { extractYouTubeVideoId } from './taskApi';
import LoadingSpinner from '@/components/LoadingSpinner';

/**
 * YouTubeTask component for handling YouTube video watching tasks
 * @param {Object} props - Component props
 * @param {string} props.youtubeUrl - The YouTube video URL
 * @param {number} props.requiredWatchPercent - Percentage required to complete (default: 80)
 * @param {number} props.points - Points awarded for completion
 * @param {Function} props.onComplete - Callback when task is completed
 * @param {Function} props.onClose - Callback when player is closed
 */
function YouTubeTask({ 
  youtubeUrl = "https://youtu.be/2MWVuCsVdiw?si=gvtPGiEyifLIWy3Q", 
  requiredWatchPercent = 80,
  points = 50,
  onComplete,
  onClose
}) {
  const [watchProgress, setWatchProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const checkIntervalRef = useRef(null);
  const videoDurationRef = useRef(0);
  const watchedTimeRef = useRef(0);
  const progressBarRef = useRef(null);
  
  const videoId = extractYouTubeVideoId(youtubeUrl);

  // Load YouTube API
  useEffect(() => {
    // Create a global callback for YouTube API
    window.onYouTubeIframeAPIReady = () => {
      setPlayerReady(true);
    };

    // Load the YouTube IFrame API script if it's not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If API is already loaded
      setPlayerReady(true);
    }

    // Clean up
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, []);

  // Initialize player when API is ready and videoId is available
  useEffect(() => {
    if (playerReady && videoId && playerContainerRef.current) {
      // Create a div for the player
      const playerDiv = document.createElement('div');
      playerDiv.id = 'youtube-player-' + Date.now(); // Unique ID to avoid conflicts
      playerContainerRef.current.innerHTML = ''; // Clear any previous content
      playerContainerRef.current.appendChild(playerDiv);
      
      // Get container dimensions
      const containerWidth = playerContainerRef.current.clientWidth;
      const containerHeight = playerContainerRef.current.clientHeight;
      
      // Initialize the player with explicit dimensions
      playerRef.current = new window.YT.Player(playerDiv.id, {
        videoId: videoId,
        width: containerWidth,
        height: containerHeight,
        playerVars: {
          'autoplay': 0, // Don't autoplay initially
          'controls': 0, // Hide default controls
          'rel': 0,
          'modestbranding': 1,
          'showinfo': 0,
          'fs': 0, // Disable fullscreen button
          'iv_load_policy': 3 // Hide annotations
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
  }, [playerReady, videoId]);

  // Add a resize handler to update player size when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (playerRef.current && playerRef.current.getIframe && playerContainerRef.current) {
        try {
          const iframe = playerRef.current.getIframe();
          const containerWidth = playerContainerRef.current.clientWidth;
          const containerHeight = playerContainerRef.current.clientHeight;
          
          if (iframe) {
            iframe.width = containerWidth;
            iframe.height = containerHeight;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
          }
        } catch (error) {
          console.error("Error resizing player:", error);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Call once to set initial size
    setTimeout(handleResize, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      
      setIsFullscreen(isCurrentlyFullscreen);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const onPlayerReady = (event) => {
    videoDurationRef.current = event.target.getDuration();
    setDuration(videoDurationRef.current);
    
    // Set initial volume
    event.target.setVolume(volume);
    
    // Video is ready to play
    setIsLoading(false);
  };

  const onPlayerStateChange = (event) => {
    // 1 = playing, 2 = paused, 0 = ended, 3 = buffering
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      startTracking();
      setIsLoading(false);
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
      stopTracking();
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
      stopTracking();
      completeVideo();
    } else if (event.data === window.YT.PlayerState.BUFFERING) {
      // Show loading spinner during buffering
      setIsLoading(true);
    } else if (event.data === window.YT.PlayerState.CUED) {
      // Video is cued and ready to play
      setIsLoading(false);
    }
  };

  const startTracking = () => {
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
    }
    
    checkIntervalRef.current = setInterval(() => {
      if (playerRef.current) {
        try {
          const currentTime = playerRef.current.getCurrentTime();
          watchedTimeRef.current = currentTime;
          setCurrentTime(currentTime);
          
          // Calculate progress percentage
          const progress = (currentTime / videoDurationRef.current) * 100;
          setWatchProgress(Math.min(progress, 100));
        } catch (error) {
          console.error("Error tracking video progress:", error);
        }
      }
    }, 1000); // Check every second
  };

  const stopTracking = () => {
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      checkIntervalRef.current = null;
    }
  };

  const completeVideo = () => {
    // Check if watched at least the required percentage of the video
    const watchedPercent = (watchedTimeRef.current / videoDurationRef.current) * 100;
    
    if (watchedPercent >= requiredWatchPercent) {
      console.log("completed");
      
      // Call the onComplete callback if provided
      if (onComplete && typeof onComplete === 'function') {
        onComplete();
      }
      
      // Close the video player after a short delay
      setTimeout(() => {
        if (onClose && typeof onClose === 'function') {
          onClose();
        }
      }, 1000);
    } else {
      alert(`You need to watch at least ${requiredWatchPercent}% of the video to complete this task. You've watched ${Math.round(watchedPercent)}%.`);
    }
  };

  // Custom control handlers
  const togglePlay = () => {
    if (!playerRef.current) return;
    
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error toggling play state:", error);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    
    if (playerRef.current) {
      try {
        playerRef.current.setVolume(newVolume);
        
        if (newVolume === 0) {
          setIsMuted(true);
        } else {
          setIsMuted(false);
        }
      } catch (error) {
        console.error("Error changing volume:", error);
      }
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    
    try {
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(volume > 0 ? volume : 50);
        setIsMuted(false);
        if (volume === 0) setVolume(50);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    
    try {
      if (!isFullscreen) {
        // Enter fullscreen
        if (videoContainerRef.current.requestFullscreen) {
          videoContainerRef.current.requestFullscreen();
        } else if (videoContainerRef.current.webkitRequestFullscreen) {
          videoContainerRef.current.webkitRequestFullscreen();
        } else if (videoContainerRef.current.mozRequestFullScreen) {
          videoContainerRef.current.mozRequestFullScreen();
        } else if (videoContainerRef.current.msRequestFullscreen) {
          videoContainerRef.current.msRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  const handleProgressBarClick = (e) => {
    if (!playerRef.current || !progressBarRef.current) return;
    
    try {
      const progressBar = progressBarRef.current;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      
      // Calculate the percentage of the click position
      const percentage = (clickPosition / progressBarWidth) * 100;
      
      // Calculate the time to seek to
      const seekTime = (percentage / 100) * videoDurationRef.current;
      
      // Seek to the calculated time
      playerRef.current.seekTo(seekTime, true);
    } catch (error) {
      console.error("Error seeking video:", error);
    }
  };

  // Format time (seconds) to MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-5560 p-4 md:p-6">
      <div className="bg-[var(--card-color)] rounded-lg w-full max-w-4xl overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-white font-medium">Watch YouTube Video</h3>
          <button 
            onClick={() => {
              stopTracking();
              if (onClose && typeof onClose === 'function') {
                onClose();
              }
            }}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div 
          ref={videoContainerRef}
          className="relative w-full bg-black"
          style={{ paddingBottom: "50.25%" }} // 16:9 aspect ratio
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <LoadingSpinner />
            </div>
          )}
          
          {/* Player container */}
          <div 
            ref={playerContainerRef} 
            className="absolute top-0 left-0 w-full h-full"
          ></div>
          
          {/* Custom overlay controls that appear on hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-100 transition-opacity duration-300 hover:opacity-100">
            {/* Progress bar */}
            <div 
              ref={progressBarRef}
              className="w-full h-2 bg-gray-700 rounded-full mb-2 cursor-pointer"
              onClick={handleProgressBarClick}
            >
              <div 
                className="h-full bg-red-600 rounded-full" 
                style={{ width: `${watchProgress}%` }}
              ></div>
            </div>
            
            {/* Controls row */}
            <div className="flex items-center justify-between">
              {/* Left side: play/pause and time */}
              <div className="flex items-center">
                <button 
                  onClick={togglePlay}
                  className="text-white mr-3 focus:outline-none"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  )}
                </button>
                
                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              
              {/* Right side: volume control and fullscreen */}
              <div className="flex items-center">
                <button 
                  onClick={toggleMute}
                  className="text-white mr-2 focus:outline-none"
                >
                  {isMuted || volume === 0 ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path>
                    </svg>
                  ) : volume <= 50 ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
                    </svg>
                  )}
                </button>
                
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume} 
                  onChange={handleVolumeChange}
                  className="w-16 md:w-24 accent-red-600 mr-4"
                />
                
                {/* Fullscreen button */}
                <button 
                  onClick={toggleFullscreen}
                  className="text-white focus:outline-none"
                >
                  {isFullscreen ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <div className="text-gray-400 text-xs">
              {Math.round(watchProgress)}% watched (need at least {requiredWatchPercent}% to complete)
            </div>
          </div>
          
          <div className="text-sm text-gray-300">
            Please watch the video to earn your reward. Don't close this window until the video is complete.
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTubeTask;
