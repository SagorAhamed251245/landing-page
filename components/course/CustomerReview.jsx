import { Empty, message, Pagination } from "antd"; // Imported Pagination from antd
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import ReactPlayer from "react-player";
import { SpinnerCircularFixed } from "spinners-react";

const CustomerReview = ({ id }) => {
  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [fetching, setFetching] = useState(false);

  const fetchData = (options) => {
    setIsLoading(true);
    axios
      .get(`https://api.bootcampshub.ai/api/course/review/get/${id}`, {
        params: options,
      })
      .then((res) => {
        if (res?.data?.categories) {
          setCategories(res?.data?.categories);
        }
        setReviewsData(res?.data?.reviews);
        setCategory(res?.data?.category);
        setCount(res?.data?.count);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        message.error("Something went wrong");
      });
  };

  useEffect(() => {
    if (!category) {
      console.log("hello");
      fetchData({
        fields: ["categories", "reviews"],
        page: 1,
        limit: 10,
        category: category ? category : "",
      });
    }
    if (category) {
      fetchData({
        fields: ["reviews"],
        page: 1,
        limit: 3,
        category: category,
      });
    }
  }, [fetching]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData({
      fields: ["reviews"],
      category: category,
      page: page,
      limit: 10,
    });
  };

  return (
    <>
      <div className="customerReview">
        <div className="container">
          <div className="title_container">
            <h2>Students Reviews</h2>
            <div className="button_container">
              {categories?.map((ct) => (
                <button
                  key={ct?.name}
                  className={`${category === ct?.name && "active"}`}
                  onClick={() => {
                    setCategory(ct?.name);
                    setFetching(!fetching);
                  }}
                >
                  {ct?.name}
                </button>
              ))}
            </div>
          </div>

          <div className="review-sections">
            {reviewsData?.length > 0 && !isLoading ? (
              <div>
                {reviewsData?.map((item) => (
                  <div key={item?._id} className="review-sections-item">
                    <div className="top">
                      <div className="profile">
                        <Image
                          width={1080}
                          height={720}
                          src={
                            item?.user?.profilePicture ||
                            item?.reviewedBy?.profilePicture ||
                            "/avatar.png"
                          }
                          alt={
                            item?.user?.fullName || item?.reviewedBy?.fullName
                          }
                        />
                        <div>
                          <h3>
                            {item?.user?.fullName ||
                              item?.reviewedBy?.fullName}
                          </h3>
                        </div>
                      </div>
                      <div>
                        <p className="ago">{moment(item?.createdAt).fromNow()}</p>
                      </div>
                    </div>

                    <div className="stars">
                      <ReactStarsRating
                        value={item?.starCount}
                        isEdit={false}
                      ></ReactStarsRating>
                    </div>

                    <div
                      className={`desc ${
                        item?.videoUrl ? "gridTemp2" : "gridTemp1"
                      }`}
                    >
                      <div>
                        <h4>{moment(item?.createdAt).format("LL")}</h4>
                        <p>{item?.text}</p>
                      </div>
                      {item?.videoUrl && (
                        <div className="player_container">
                          <ReactPlayer
                            url={item?.videoUrl}
                            controls
                            width="100%"
                            height="100%"
                            className="react_player"
                            style={{ borderRadius: "15px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "250px",
                }}
              >
                <SpinnerCircularFixed
                  size={100}
                  thickness={150}
                  speed={100}
                  color="#27ac1f"
                  secondaryColor="rgba(0, 0, 0, .05)"
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "250px",
                }}
              >
                <Empty description="No reviews data available"></Empty>
              </div>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Pagination
              current={currentPage} // Ant Design requires `current`
              total={count} // Total number of reviews
              pageSize={10} // Number of items per page
              onChange={handlePageChange} // Ant Design `onChange`
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
