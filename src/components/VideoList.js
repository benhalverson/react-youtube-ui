import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  // has props.videos

  const renderedList = videos
    // some video data are a "channel", so it can't be rendered as video
    .filter(video => video.id && video.id.videoId)
    .map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      );
    });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
