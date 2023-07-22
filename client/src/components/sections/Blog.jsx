import { useState } from "react";
import Boat from "../../assets/boat.png";
import blogStyle from "./Blog.module.css";

function Blog() {
  const [showText, setShowText] = useState(false);
  const [isClicked, setIsClicked] = useState("Read More");

  const handleReadMore = () => {
    setShowText(!showText);
    setIsClicked(!showText ? "Read Less" : "Read More");
  };

  return (
    <div className={blogStyle.blogSection}>
      <div className={blogStyle.blogHeader}>
        <h3 className={blogStyle.blogH3}>Auf Deutsch Gesagt </h3>
        <h2 className={blogStyle.blogH2}>Blog</h2>
      </div>

      <div className={blogStyle.blogHrDiv}>
        <hr className={blogStyle.blogHr} />
      </div>
      <div className={blogStyle.blogContent}>
        <div className={blogStyle.blogImage}>
          <img className={blogStyle.blogImg} src={Boat} alt="Hafen" />
        </div>
        <div className={blogStyle.blogText}>
          <p className={blogStyle.blogTextPara}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            assumenda officia ad illum fugiat, assumenda!
          </p>
          <button
            className={blogStyle.blogReadMoreBtn}
            onClick={handleReadMore}
          >
            {isClicked}
          </button>
        </div>
      </div>

      {/* <div className={blogStyle.blogLine}>
        <hr className={blogStyle.blogLinee} />
      </div> */}

      {showText && (
        <div className={blogStyle.blogParagraph}>
          <div className={blogStyle.blogLine}>
            <hr className={blogStyle.blogLinee} />
          </div>
          <p className={blogStyle.blogPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            distinctio earum accusantium quisquam vel debitis? Labore nobis
            assumenda exercitationem, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            distinctio earum accusantium quisquam vel debitis?.
          </p>
        </div>
      )}
    </div>
  );
}
export default Blog;
