import { useState } from "react";
import commentStyle from "./Comment.module.css";

export default function CommentSection() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Comment:", comment);
    console.log("Rating:", rating);
    setName("");
    setComment("");
    setRating(0);
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

  const handleRatingHover = (hoveredRating) => {
    setRating(hoveredRating);
  };

  const handleRatingLeave = () => {
    setRating(0);
  };

  return (
    <div id="kontakt" className={commentStyle.commentSection}>
      <div className={commentStyle.commentContent}>
        <h3>leave me a comment and rate my content!</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              className={commentStyle.textArea}
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <div className={commentStyle.ratingStars}>{renderStars()}</div>
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
