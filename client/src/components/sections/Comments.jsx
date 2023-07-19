import { useState } from "react";
import commentStyle from "./Comment.module.css";
import axios from "axios";

export default function CommentSection() {
  const [rating, setRating] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      userName: formData.get("userName"),
      comment: formData.get("comment"),
      rating: formData.get("rating"),
    };
    try {
      const res = await axios.post("/api/comment/user/create", data);
      console.log(res.data);
    } catch (error) {
      console.error("there was an error", error);
    }
  };
  const handleRatingChange = (selectedRating) => {
    console.log("Selected rating:", selectedRating);
    setRating(selectedRating);
  };
  const handleRatingHover = (hoveredRating) => {
    console.log("Hovered rating:", hoveredRating);
    setRating(hoveredRating);
  };

  const handleRatingLeave = () => {
    console.log("Left the star area");
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? commentStyle.starFilled : commentStyle.star}
          onClick={() => handleRatingChange(i)}
          onMouseEnter={() => handleRatingHover(i)}
          onMouseLeave={handleRatingLeave}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div id="comment-section" className={commentStyle.commentSection}>
      <div className={commentStyle.commentContent}>
        <h3>leave me a comment and rate my content!</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input name="userName" type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              name="comment"
              className={commentStyle.textArea}
              id="comment"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <div className={commentStyle.ratingStars}>
              {" "}
              <input type="hidden" name="rating" value={rating} />
              {renderStars()}
            </div>
          </div>
          <button type="submit" className={commentStyle.button}>
            Submit
          </button>
        </form>
        <div className={commentStyle.hrDiv}>
          <hr className={commentStyle.Hr} />
        </div>
        <div className={commentStyle.footer}>
          <h4>Follow me here</h4>
          <div className={commentStyle.icons}></div>
        </div>
      </div>
    </div>
  );
}
