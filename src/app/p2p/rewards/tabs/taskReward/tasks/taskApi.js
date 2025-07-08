/**
 * YouTube task API functions for handling YouTube video verification
 */

/**
 * Extracts the YouTube video ID from any YouTube URL format
 * @param {string} url - The YouTube URL
 * @return {string|null} - The video ID or null if not found
 */
export const extractYouTubeVideoId = (url) => {
  if (!url) return null;
  
  try {
    // Create URL object to parse the URL
    const urlObj = new URL(url);
    
    // Handle youtu.be short links
    if (urlObj.hostname === 'youtu.be') {
      // The pathname starts with '/', so we remove it with substring(1)
      return urlObj.pathname.substring(1);
    }
    
    // Handle youtube.com URLs
    if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      // For watch URLs
      if (urlObj.pathname === '/watch') {
        return urlObj.searchParams.get('v');
      }
      
      // For embed URLs
      if (urlObj.pathname.startsWith('/embed/')) {
        return urlObj.pathname.split('/')[2];
      }
      
      // For shorts
      if (urlObj.pathname.startsWith('/shorts/')) {
        return urlObj.pathname.split('/')[2];
      }
      
      // For v URLs
      if (urlObj.pathname.startsWith('/v/')) {
        return urlObj.pathname.split('/')[2];
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error parsing YouTube URL:', error);
    return null;
  }
};

/**
 * Validates if a string is a valid YouTube URL
 * @param {string} url - The URL to validate
 * @return {boolean} - Whether the URL is a valid YouTube URL
 */
export const isValidYouTubeUrl = (url) => {
  if (!url) return false;
  
  try {
    const urlObj = new URL(url);
    const validHostnames = ['youtube.com', 'www.youtube.com', 'youtu.be'];
    
    if (!validHostnames.includes(urlObj.hostname)) {
      return false;
    }
    
    // Check if we can extract a video ID
    const videoId = extractYouTubeVideoId(url);
    return !!videoId;
  } catch (error) {
    return false;
  }
};

/**
 * Creates a YouTube watching task
 * @param {Object} taskData - The task data
 * @param {string} taskData.url - The YouTube URL
 * @param {number} taskData.requiredWatchPercent - The percentage of the video that must be watched (default: 80)
 * @param {string} taskData.taskTitle - The title of the task
 * @param {string} taskData.taskDescription - The description of the task
 * @param {number} taskData.rewardAmount - The amount to reward upon completion
 * @return {Promise<Object>} - The created task
 */
export const createYouTubeTask = async (taskData) => {
  const { url, requiredWatchPercent = 80, taskTitle, taskDescription, rewardAmount } = taskData;
  
  if (!isValidYouTubeUrl(url)) {
    throw new Error('Invalid YouTube URL provided');
  }
  
  const videoId = extractYouTubeVideoId(url);
  
  try {
    // Here you would make an API call to your backend to create the task
    // This is a placeholder for the actual implementation
    const response = await fetch('/api/tasks/youtube', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        videoId,
        requiredWatchPercent,
        taskTitle,
        taskDescription,
        rewardAmount,
        taskType: 'YOUTUBE_WATCH',
        originalUrl: url
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create YouTube task');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating YouTube task:', error);
    throw error;
  }
};

/**
 * Verifies a YouTube watching task completion
 * @param {Object} verificationData - The verification data
 * @param {string} verificationData.taskId - The ID of the task
 * @param {string} verificationData.videoId - The YouTube video ID
 * @param {number} verificationData.watchedSeconds - The number of seconds watched
 * @param {number} verificationData.videoDuration - The total duration of the video in seconds
 * @param {number} verificationData.watchedPercent - The percentage of the video that was watched
 * @return {Promise<Object>} - The verification result
 */
export const verifyYouTubeWatching = async (verificationData) => {
  const { taskId, videoId, watchedSeconds, videoDuration, watchedPercent } = verificationData;
  
  try {
    // Here you would make an API call to your backend to verify the task
    // This is a placeholder for the actual implementation
    const response = await fetch('/api/tasks/youtube/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId,
        videoId,
        watchedSeconds,
        videoDuration,
        watchedPercent,
        completedAt: new Date().toISOString()
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to verify YouTube task');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error verifying YouTube task:', error);
    throw error;
  }
};

/**
 * Gets YouTube video details using the video ID
 * @param {string} videoId - The YouTube video ID
 * @return {Promise<Object>} - The video details
 */
export const getYouTubeVideoDetails = async (videoId) => {
  try {
    // This would typically call your backend which would use the YouTube API
    // to get video details. This is a placeholder for the actual implementation.
    const response = await fetch(`/api/youtube/videos/${videoId}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to get YouTube video details');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting YouTube video details:', error);
    throw error;
  }
};

/**
 * Utility function to format a YouTube URL to the standard embed format
 * @param {string} videoId - The YouTube video ID
 * @return {string} - The formatted embed URL
 */
export const formatYouTubeEmbedUrl = (videoId) => {
  if (!videoId) return '';
  return `https://www.youtube.com/embed/${videoId}`;
};

/**
 * Utility function to format a YouTube URL to the standard watch format
 * @param {string} videoId - The YouTube video ID
 * @return {string} - The formatted watch URL
 */
export const formatYouTubeWatchUrl = (videoId) => {
  if (!videoId) return '';
  return `https://www.youtube.com/watch?v=${videoId}`;
};

// Export all functions as a YouTube task API object
export const youtubeTaskApi = {
  extractVideoId: extractYouTubeVideoId,
  isValidUrl: isValidYouTubeUrl,
  createTask: createYouTubeTask,
  verifyWatching: verifyYouTubeWatching,
  getVideoDetails: getYouTubeVideoDetails,
  formatEmbedUrl: formatYouTubeEmbedUrl,
  formatWatchUrl: formatYouTubeWatchUrl
};

export default youtubeTaskApi;