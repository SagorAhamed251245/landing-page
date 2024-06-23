const SuccessfulCard = ({ url }) => {
  return (
    <div className="single_video">
      <div className="div">
        <iframe
          loading="lazy"
          id="founder"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
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

      {/* <div style={{ padding: "12px" }} className="blur">
        <h3 style={{ marginBottom: "5px" }}>Angel Rose</h3>
        <p>AWS CloudOps Engineer (Students)</p>
      </div> */}
    </div>
  );
};

export default SuccessfulCard;
