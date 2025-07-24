import React from 'react'
import { PlayCircleOutline } from '@mui/icons-material';
import { extractYouTubeVideoId } from './taskApi';
import LoadingSpinner from '../../../../../components/LoadingSpinner';
import { useState, useEffect, useRef } from 'react';
import { useApp } from '../../../../../context/app.context';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReward } from '../../../context/api';
import { toast } from 'sonner';

export default function YoutubeTask({youtubeUrl, type, taskId}) {
    const location = useLocation()
    const navigate = useNavigate()
    const { user, api } = useApp();
    const { fetchDailyTaskData } = useReward()
    const [pageLoad, setPageLoad]= useState(false)
    const [openVideo, setOpenVideo] = useState(false)
    const [videoLoading, setVideoLoading] = useState(false)
    const videoId = extractYouTubeVideoId(youtubeUrl);
    const playerRef = useRef(null);
    const youtubePlayer = useRef(null);
    
    const handleVideoEnd = async () => {
        let data = {type, taskId}
        const response = await api.performTaskEl( data, user?.userId)
        if(response?.success){
            fetchDailyTaskData()
            toast.success("Youtube task completed")
            navigate(location.pathname + "?tab=task")
        }
    };

    useEffect(() => {
        setPageLoad(true)
        // Load YouTube IFrame Player API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            window.onYouTubeIframeAPIReady = () => {
                setPageLoad(false)
                console.log('YouTube API ready');
            };
        }
    }, []);

    useEffect(() => {
        if (openVideo && videoId && window.YT && window.YT.Player) {
            setVideoLoading(true);
            try {
                youtubePlayer.current = new window.YT.Player(playerRef.current, {
                    videoId: videoId,
                    playerVars: {
                        autoplay: 1,
                        controls: 1
                    },
                    events: {
                        onReady: () => {
                            setVideoLoading(false);
                        },
                        onStateChange: (event) => {
                            if (event.data === window.YT.PlayerState.ENDED) {
                                handleVideoEnd();
                            }
                        },
                        onError: (event) => {
                            setVideoLoading(false);
                            let errorMessage = 'YouTube video error occurred';
                            
                            switch(event.data) {
                                case 2:
                                    errorMessage = 'Invalid video ID';
                                    break;
                                case 5:
                                    errorMessage = 'Video cannot be played in HTML5 player';
                                    break;
                                case 100:
                                    errorMessage = 'Video not found or private';
                                    break;
                                case 101:
                                case 150:
                                    errorMessage = 'Video not allowed to be played in embedded players';
                                    break;
                                default:
                                    errorMessage = 'Unknown video error';
                            }
                            
                            toast.error(errorMessage);
                        }
                    }
                });
            } catch (error) {
                setVideoLoading(false);
                toast.error('Failed to initialize YouTube player');
                console.error('YouTube player initialization error:', error);
            }
        } else if (openVideo && videoId && !window.YT) {
            setVideoLoading(false);
            toast.error('YouTube API failed to load');
        }
        
        return () => {
            if (youtubePlayer.current) {
                try {
                    youtubePlayer.current.destroy();
                } catch (error) {
                    console.error('Error destroying YouTube player:', error);
                }
            }
        };
    }, [openVideo, videoId]);
    
    const StartYoutubeVideo = (()=>{
        setOpenVideo(true)
        setVideoLoading(true)
    })
    
    return (
        <div className="w-full aspect-video bg-[#3c3c3c41] bg-opacity-50 rounded-lg flex items-center justify-center mb-8">
            {pageLoad && (
                <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#3c3c3c41] bg-opacity-75 z-10">
                        <LoadingSpinner />
                    </div>
                </div>
            )}

            {!openVideo && !pageLoad && (
                <div className="text-center ">
                    <PlayCircleOutline onClick={StartYoutubeVideo} className="text-6xl text-gray-400 mb-2 cursor-pointer" />
                    <p className="text-gray-400">Video player will appear here</p>
                </div>
            )}
            
            {openVideo && videoId && (
                <div className="w-full h-full relative">
                    {videoLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#3c3c3c41] bg-opacity-75 z-10">
                            <LoadingSpinner />
                        </div>
                    )}
                    <div 
                        ref={playerRef}
                        className="w-full h-full"
                    ></div>
                </div>
            )}
        </div>
    )
}
