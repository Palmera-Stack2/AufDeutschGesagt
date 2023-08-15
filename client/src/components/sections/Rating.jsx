import ratingStyle from "./Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Rating() {
  const [commentsCards, setCommentsCards] = useState([]);

  const [slideIndex, setSlideIndex] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    fetchComments();
  }, [slideIndex]);
  useEffect(() => {
    // Update cardsPerPage based on screen size
    function handleResize() {
      if (window.innerWidth <= 900 && window.innerWidth >= 300) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3); // Default value for larger screens
      }
    }
    handleResize(); // Call the function on initial render

    // Listen for resize events to update cardsPerPage dynamically
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`/api/comment/user/list`);
      // setCommentsCards(res.data.comments);
      setCommentsCards((prevComments) => [...prevComments, ...res.data]);
    } catch (error) {
      console.log("Resource not found");
    }
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

  const totalCards = commentsCards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex < 1) {
        return 1;
      } else if (newIndex > totalPages) {
        return totalPages;
      }
      return newIndex;
    });
  }

  return (
    <div id="rating" className={ratingStyle.ratingSection}>
      <div className={ratingStyle.ratingheader}>
        <h3 className={ratingStyle.ratingH3}>Auf Deutsch gesagt! </h3>
        <h2 className={ratingStyle.ratingh2}>Testimonials</h2>
      </div>
      <div className={ratingStyle.ratingHrDiv}>
        <hr className={ratingStyle.ratingHr} />
      </div>
      <div className={ratingStyle.slideshow_container}>
        <div className={ratingStyle.mySlides_fad}>
          {commentsCards.map((card, index) => (
            <div
              key={card._id}
              className={ratingStyle.ratingCard}
              style={{
                display:
                  index >= (slideIndex - 1) * cardsPerPage &&
                    index < slideIndex * cardsPerPage
                    ? "flex"
                    : "none",
              }}
            >
              <div className={ratingStyle.cardHeader}>
                <h4>{card.userName}</h4>
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              <p className={ratingStyle.ratingText}>{card.comment}</p>
              <div className={ratingStyle.hrCard}>
                <hr className={ratingStyle.Hrcard} />
              </div>
              <div className={ratingStyle.ratingStars}>
                {generateRatingStars(card.rating)}
                <p className={ratingStyle.rating_number}>{card.rating}/ 5</p>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div className={ratingStyle.arrowDiv}>
          <p className={ratingStyle.prev} onClick={() => plusSlides(-1)}>
            ❮
          </p>
          <p className={ratingStyle.next} onClick={() => plusSlides(1)}>
            ❯
          </p>
        </div>
      </div>
    </div>
  );
}
