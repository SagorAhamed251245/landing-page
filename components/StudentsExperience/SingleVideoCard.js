const SingleVideoCard = ({ url, id }) => {
  //   const [playing, isPlaying] = useState(true);
  /* function playPause() {
    let myVideo = document.getElementById(id);
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } */

  return (
    <div className="single_video">
      <div className="div">
        <iframe
          loading="lazy"
          id={id}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            display: "flex",
          }}
          className="video"
          // src="https://www.youtube.com/embed/k7PDCIxEirE?si=5s8IcNaSJc4ymIza"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video_relative"></div>
      {/* <div className="play_button" onClick={playPause}>
        <div>
          <img
          loading="lazy" 
   height="auto"  width="auto"  
 
 src="/images/svg/Polygon.svg" alt="Play/Pause" />
        </div>
      </div> */}
    </div>
  );
};

export default SingleVideoCard;
