import panelblogStyle from "../panelCss/panelblogStyle.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import PanelNavbar from "../../UI/PanelNavbar";
import { useEffect, useState } from "react";

export default function PanelBlog() {
  const [dateToday, setDateToday] = useState("");
  const [blogs, setBlogs] = useState([]);
  function getFormattedDate() {
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = currentDate.toLocaleString(undefined, options);
    setDateToday(formattedDate);
  }
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`/api/post/owner/list`);
      setBlogs(res.data);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  useEffect(() => {
    getFormattedDate();
    fetchBlogs();
  }, []);
  const handeldeleteBlogs = async (id) => {
    try {
      await axios.delete(`/api/post/owner/delete/${id}`);
      setBlogs((prevJournal) => prevJournal.filter((x) => x._id !== id));
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      content: formData.get("content"),
    };
    try {
      const res = await axios.post(`/api/post/owner/create`, data);
      console.log(res.data);
    } catch (error) {
      console.error("there was an error", error);
    }
    fetchBlogs();
  };
  return (
    <div className={panelblogStyle.hero_blog}>
      <div className={panelblogStyle.left_blog}>
        <h2 className={panelblogStyle.left_blogheader}>Welcome Robin ! </h2>
        <hr />
        <h3>{dateToday}</h3>
      </div>
      <div className={panelblogStyle.right_blog}>
        <PanelNavbar />
        <h2 className={panelblogStyle.right_blogheader}>
          Administrator Panel-Blog
        </h2>
        <hr className={panelblogStyle.right_bloghr} />
        <div className={panelblogStyle.container_blog}>
          <div className={panelblogStyle.wrapper_blog}>
            {blogs.map((blog) => (
              <div key={blog._id} className={panelblogStyle.div_blog}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className={panelblogStyle.blog_faPenToSquare}
                />
                <button
                  onClick={() => handeldeleteBlogs(blog._id)}
                  className={panelblogStyle.bligicon_btn}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className={panelblogStyle.blog_xicon}
                  />
                </button>

                <p className={panelblogStyle.blog_content}>{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
        <form className={panelblogStyle.blog_form} onSubmit={handleSubmit}>
          <textarea
            className={panelblogStyle.blog_textarea}
            type="text"
            placeholder="your Post"
            name="content"
          />
          <button className={panelblogStyle.blog_submit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
