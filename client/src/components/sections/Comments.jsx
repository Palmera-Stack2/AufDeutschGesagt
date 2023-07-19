import { useState } from "react";
import commentStyle from "./Comment.module.css";
// import follow from "../../assets/follow.png";


export default function CommentSection() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    const input = event.target.value;
    const limitedText = input.substring(0, 200); // Limit to 30 characters
    setComment(limitedText);
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
    <div id="comment-section" className={commentStyle.commentSection}>
      <div className={commentStyle.commentContent}>
        {/* <div className={commentStyle.follow}>
          <div className={commentStyle.followDiv}>
   <img className={commentStyle.followIMG} src={follow}></img> 
          </div>
        </div> */}
        <h3 className={commentStyle.h3}>
          leave me a comment and rate my content!
        </h3>

        <form className={commentStyle.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Your name here..."
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className={commentStyle.nameArea}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              placeholder="Your comment here..."
              className={commentStyle.textArea}
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              required
            ></textarea>
          </div>
          <div>
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
          <h4 className={commentStyle.h4}>Follow me here</h4>
          <div className={commentStyle.icons}>
            <div className={commentStyle.socialIcons}>
              <a
                href="https://www.instagram.com/aufdeutschgesagt"
                target="blanc"
              >
                <img src="./src/assets/insta.png"></img>
              </a>

              <a
                href="https://podcasts.apple.com/us/podcast/id1455018378?mt=2"
                target="blanc"
              >
                <img src="./src/assets/Itunes.png"></img>
              </a>

              <a
                href="https://www.patreon.com/aufdeutschgesagt/about"
                target="blanc"
              >
                <img src="./src/assets/patreon.png"></img>
              </a>

              <a
                href=" https://www.facebook.com/Auf-Deutsch-gesagt-Podcast-2244379965835103/"
                target="blanc"
              >
                <img src="./src/assets/face.png"></img>
              </a>

              <a
                href="https://www.youtube.com/c/AufDeutschgesagt"
                target="blanc"
              >
                <img src="./src/assets/youtube.png"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
