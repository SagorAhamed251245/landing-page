const LastCard = () => {
  return (
    <div className="lastCard">
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
          src="https://www.youtube.com/embed/Ifj-hzVnwhE?si=6fbr_iOates5Q1xq"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LastCard;
