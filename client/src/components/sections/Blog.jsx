import { useState, useEffect } from "react";
import Boat from "../../assets/boat.png";
import blogStyle from "./Blog.module.css";
import axios from "axios";

function Blog() {
  const [showText, setShowText] = useState(false);
  const [isClicked, setIsClicked] = useState("Mehr Lesen");
  const [posts, setPosts] = useState([]);

  const handleReadMore = () => {
    setShowText(!showText);
    setIsClicked(!showText ? "Weniger Lesen" : "Mehr Lesen");
  };

  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = async () => {
    try {
      const res = await axios.get(`/api/post/user/list`);

      setPosts(res.data);
      console.log(posts);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const lastPostContent =
    posts.length > 0 ? posts[posts.length - 1].content : "";
  const words = lastPostContent.split(" ");
  const first15Words = words.slice(0, 12).join(" ");
  const restOfTheWords = words.slice(12).join(" ");

  return (
    <div id="blog" className={blogStyle.blogSection}>
      <div className={blogStyle.blogHeader}>
        <h3 className={blogStyle.blogH3}>Auf Deutsch gesagt!</h3>
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
          <p className={blogStyle.blogTextPara}>{first15Words}</p>
          {showText && (
            <div className={blogStyle.blogParagraph}>
              <div className={blogStyle.blogLine}>

              </div>
              <p className={blogStyle.blogPara}>{restOfTheWords}</p>
            </div>
          )}
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


    </div>
  );
}
export default Blog;
