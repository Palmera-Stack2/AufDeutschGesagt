
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import HafenImage from "../../assets/Hafen.jpg";
import blogStyle from "./Blog.module.css";

function Blog() {
  const [showText, setShowText] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const handleReadMore = () => {
    setShowText(!showText);
    setIsClicked("Read Less");
  };

  return (
    <div className={blogStyle.blogSection}>
      <div className={blogStyle.blogHeader}>
        <div>
          <FontAwesomeIcon
            className={blogStyle.blogIcon}
            icon={faBlog}
            size="2x"
          />
        </div>
        <div className={blogStyle.blogHeader}>
          <h4 className={blogStyle.blogHeading}>Blog</h4>
        </div>
      </div>
      <div className={blogStyle.blogHrDiv}>
        <hr className={blogStyle.blogHr} />
      </div>
      <div className={blogStyle.blogContent}>
        <div className={blogStyle.blogImage}>
          <img src={HafenImage} alt="Hafen" />
        </div>
        <div className={blogStyle.blogText}>
          <p className={blogStyle.blogTextPara}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            assumenda officia ad illum fugiat, assumenda!
          </p>
          <button className={blogStyle.blogReadMoreBtn} onClick={handleReadMore}>
            {isClicked ? "Read More " : "Read Less"}
          </button>
        </div>
      </div>
      <div className={blogStyle.blogLine}>
        <hr className={blogStyle.blogLinee} />
      </div>
      {showText && (
        <div className={blogStyle.blogParagraph}>
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
