import ratingStyle from "./Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Rating() {
  const [commentsCards, setCommentsCards] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchComments();
  }, [page]);
  const fetchComments = async () => {
    try {
      const res = await axios.get(`/api/comment/user/list`, {
        params: { page },
      });
      // setCommentsCards(res.data.comments);
      setCommentsCards((prevComments) => [
        ...prevComments,
        ...res.data.comments,
      ]);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const generateRatingStars = (rating) => {
    const array = [];

    for (let i = 1; i <= rating; i++) {
      array.push(
        <FontAwesomeIcon
          icon={faStar}
          className={ratingStyle.starIcon}
          key={i}
        />
      );
    }

    return array;
  };
  return (
    <div id="rating" className={ratingStyle.ratingSection}>
      <h1 className={ratingStyle.rating_header}>
        what my student saying about me
      </h1>

      <div className={ratingStyle.hr_container}>
        <hr className={ratingStyle.hr_heading} />
      </div>
      <div className={ratingStyle.ratingContainer}>
        <div className={ratingStyle.ratingWrapper}>
          {commentsCards.map((card) => (
            <div key={card._id} className={ratingStyle.ratingCard}>
              <div className={ratingStyle.cardHeader}>
                <h4>{card.userName}</h4>
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              <p className={ratingStyle.ratingText}>{card.comment}</p>
              <div className={ratingStyle.hrDiv}>
                <hr className={ratingStyle.Hr} />
              </div>
              <div className={ratingStyle.ratingStars}>
                {generateRatingStars(card.rating)}
                <p className={ratingStyle.rating_number}>{card.rating}/ 5</p>
              </div>
            </div>
          ))}
        </div>

        <button className={ratingStyle.showmore_btn} onClick={handleLoadMore}>
          Show more
        </button>
      </div>
    </div>
  );
}
