import { useState } from "react";
import commentStyle from "./Comment.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
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
      <form className={commentStyle.comment_form} onSubmit={handleSubmit}>
        <h2 className={commentStyle.commenth2}>
          leave me a comment and rate my content!
        </h2>

        <label className={commentStyle.comment_label} htmlFor="name">
          Name
        </label>

        <input
          placeholder="Your name here..."
          className={commentStyle.comment_nameArea}
          name="userName"
          type="text"
          id="name"
          required
        />

        <label className={commentStyle.comment_label} htmlFor="comment">
          Comment
        </label>
        <textarea
          placeholder="Your comment here..."
          name="comment"
          className={commentStyle.comment_textArea}
          id="comment"
          required
        ></textarea>

        <div className={commentStyle.ratingStars}>
          <input type="hidden" name="rating" value={rating} />
          {renderStars()}
        </div>

        <button type="submit" className={commentStyle.comment_button}>
          Submit
        </button>
      </form>
      <FontAwesomeIcon icon={faComment} className={commentStyle.chaticon} />
      <p className={commentStyle.chattext}>Follow me !</p>
      <div className={commentStyle.comment_hrDiv}>
        <hr className={commentStyle.comment_Hr} />
      </div>
      <div className={commentStyle.comment_footer}>
        <div className={commentStyle.footerhrDiv}>
          <h4 className={commentStyle.comment_h4}>Social Media</h4>
        </div>
        <div className={commentStyle.comment_socialIcons}>
          <a
            className={commentStyle.socialIconsAnchor}
            href="https://www.instagram.com/aufdeutschgesagt"
            target="blanc"
          >
            <img
              className={commentStyle.comment_socialIconsImg}
              src="./src/assets/insta.png"
            ></img>
          </a>
          <a
            className={commentStyle.comment_socialIconsAnchor}
            href="https://podcasts.apple.com/us/podcast/id1455018378?mt=2"
            target="blanc"
          >
            <img
              className={commentStyle.comment_socialIconsImg}
              src="./src/assets/Itunes.png"
            ></img>
          </a>
          <a
            className={commentStyle.comment_socialIconsAnchor}
            href="https://www.patreon.com/aufdeutschgesagt/about"
            target="blanc"
          >
            <img
              className={commentStyle.comment_socialIconsImg}
              src="./src/assets/patreon.png"
            ></img>
          </a>
          <a
            className={commentStyle.comment_socialIconsAnchor}
            href=" https://www.facebook.com/Auf-Deutsch-gesagt-Podcast-2244379965835103/"
            target="blanc"
          >
            <img
              className={commentStyle.comment_socialIconsImg}
              src="./src/assets/face.png"
            ></img>
          </a>
          <a
            className={commentStyle.comment_socialIconsAnchor}
            href="https://www.youtube.com/c/AufDeutschgesagt"
            target="blanc"
          >
            <img
              className={commentStyle.comment_socialIconsImg}
              src="./src/assets/youtube.png"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
