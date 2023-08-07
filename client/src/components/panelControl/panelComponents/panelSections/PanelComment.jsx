import PanelNavbar from "../../UI/PanelNavbar";
import { useEffect, useState } from "react";
import panelcommentStyle from "../panelCss/panelcommentStyle.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

export default function PanelComment() {
  const [dateToday, setDateToday] = useState("");
  const [comments, setComments] = useState([]);
  const [deletedComments, setDeletedComments] = useState(0);

  useEffect(() => {
    getFormattedDate();
    fetchComments();
  }, []);
  function getFormattedDate() {
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = currentDate.toLocaleString(undefined, options);
    setDateToday(formattedDate);
  }
  const fetchComments = async () => {
    try {
      const res = await axios.get(`/api/comment/owner/list`);
      setComments(res.data);
    } catch (error) {
      console.log("Resource not found");
    }
  };

  const handeldeleteComments = async (id) => {
    try {
      await axios.delete(`/api/comment/owner/delete/${id}`);
      setComments((prevJournal) => prevJournal.filter((x) => x._id !== id));
      setDeletedComments((prevCount) => prevCount + 1);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  return (
    <div className={panelcommentStyle.hero_comment}>
      <div className={panelcommentStyle.left_comment}>
        <h2 className={panelcommentStyle.left_commenth2}>Welcome Robin ! </h2>
        <hr className={panelcommentStyle.left_commenthr} />
        <h3 className={panelcommentStyle.left_commenth3}>{dateToday}</h3>
        <p className={panelcommentStyle.comments}>
          {comments.length} comments you have{" "}
          <FontAwesomeIcon icon={faThumbsUp} />
        </p>
        {deletedComments < 2 ? (
          <p className={panelcommentStyle.comments}>
            {deletedComments} Deleted Comment{" "}
            <FontAwesomeIcon icon={faThumbsDown} />
          </p>
        ) : (
          <p className={panelcommentStyle.comments}>
            {deletedComments} Deleted Comments{" "}
            <FontAwesomeIcon icon={faThumbsDown} />
          </p>
        )}
      </div>
      <div className={panelcommentStyle.right_comment}>
        <PanelNavbar />
        <h2 className={panelcommentStyle.right_commentheader}>
          Administrator Panel-Comments
        </h2>
        <hr className={panelcommentStyle.right_commenthr} />
        <div className={panelcommentStyle.container_comment}>
          <div className={panelcommentStyle.wrapper_comment}>
            {comments.map((comment) => (
              <div key={comment._id} className={panelcommentStyle.div_comment}>
                <FontAwesomeIcon
                  icon={faMessage}
                  className={panelcommentStyle.comment_messageicon}
                />
                <button
                  onClick={() => handeldeleteComments(comment._id)}
                  className={panelcommentStyle.iconcomment_btn}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className={panelcommentStyle.comment_xicon}
                  />
                </button>

                <h3 className={panelcommentStyle.divcomment_header}>
                  {comment.userName}
                </h3>
                <p className={panelcommentStyle.comment_content}>
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
