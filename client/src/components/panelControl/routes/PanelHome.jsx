import PanelNavbar from "../UI/PanelNavbar";
import style from "../panelComponents/panelCss/panelHomeStyle.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function PenelHome() {
  const [unReadComments, setUnReadComments] = useState([]);
  // const[blogs,setBlogs]=useState([])
  const [dateToday, setDateToday] = useState("");
  function getFormattedDate() {
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = currentDate.toLocaleString(undefined, options);
    setDateToday(formattedDate);
  }
  const fetchUnReadComments = async () => {
    try {
      const res = await axios.get(`/api/comment/owner/list/unread`);
      setUnReadComments(res.data);
    } catch (error) {
      console.log("Resource not found");
    }
  };

  useEffect(() => {
    getFormattedDate();
    fetchUnReadComments();
  }, []);

  return (
    <div className={style.hero}>
      <div className={style.left}>
        <h2>Welcome Robin ! </h2>
        <hr />
        <p className={style.unReadComments}>{unReadComments}</p>
        <button>Recived</button>
        <h3>{dateToday}</h3>
      </div>
      <div className={style.right}>
        <PanelNavbar />

        <h2>Administrator Panel</h2>
        <hr />
        <div className={style.container}>
          <div className={style.wrapper}>
            <h3>
              <Link to="/panelcomment">
                {" "}
                <FontAwesomeIcon icon={faMessage} className={style.faMessage} />
              </Link>
              Comments
            </h3>
            <p>Hello Robin,you have {unReadComments} unread comments!</p>
          </div>
          <div className={style.wrapper}>
            <h3>
              <Link to="/panelblog">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className={style.faPenToSquare}
                />
              </Link>
              Blog
            </h3>
            <p>would you like to post something?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
