import React from 'react'
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
      const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
      const _onReady = (event) => {
        event.target.pauseVideo();
      };  
    return <YouTube videoId={videoId} options={options} onReady={_onReady} id="video"/>;
};
export default VideoPlayer;

