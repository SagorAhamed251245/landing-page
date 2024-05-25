import React from 'react';

const SuccessfulCard = ({ url, id }) => {
    function playPause() {
        let myVideo = document.getElementById(id);
        if (myVideo.paused) myVideo.play();
        else myVideo.pause();
      }
    return (
        <div className="single_video">
        <div className="div">
          <video
            id={id}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="video"
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>
        <div className="video_relative"></div>
        <div className="play_button" onClick={playPause}>
          <div>
            <img src="/images/svg/Polygon.svg" alt="Play/Pause" />
          </div>
        </div>

        <div style={{padding:"12px"}} className='blur'>
            <h3 style={{marginBottom:"5px"}}>Angel Rose</h3>
            <p>AWS CloudOps Engineer (Students)</p>
          </div>
      </div>
    );
};

export default SuccessfulCard;