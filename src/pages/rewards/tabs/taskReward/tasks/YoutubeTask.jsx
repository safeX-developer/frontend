import React from 'react'
import { PlayCircleOutline } from '@mui/icons-material';
import { extractYouTubeVideoId } from './taskApi';
import LoadingSpinner from '../../../../../components/LoadingSpinner';
import { useState } from 'react';

export default function YoutubeTask({youtubeUrl}) {
    const [openVideo, setOpenVideo] = useState(false)
    const videoId = extractYouTubeVideoId(youtubeUrl);
    
    const StartYoutubeVideo = (()=>{
        setOpenVideo(true)
    })
    
    return (
        <div className="w-full aspect-video bg-[#3c3c3c41] bg-opacity-50 rounded-lg flex items-center justify-center mb-8">
            {!openVideo && (
                <div className="text-center ">
                    <PlayCircleOutline onClick={StartYoutubeVideo} className="text-6xl text-gray-400 mb-2 cursor-pointer" />
                    <p className="text-gray-400">Video player will appear here</p>
                </div>
            )}
            
            {openVideo && videoId && (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    )
}
