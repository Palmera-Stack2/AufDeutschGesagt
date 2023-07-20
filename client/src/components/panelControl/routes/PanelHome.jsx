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
    <div className={style.hero_home}>
      <div className={style.left_home}>
        <h2 className={style.left_homeheader}>Welcome Robin ! </h2>
        <hr className={style.left_homehr} />
        <p className={style.unReadComments}>{unReadComments}</p>
        <button className={style.left_homebtn}>Recived</button>
        <h3 className={style.left_homeh3}>{dateToday}</h3>
      </div>
      <div className={style.right_home}>
        <PanelNavbar />

        <h2 className={style.right_homeheader}>Administrator Panel</h2>
        <hr className={style.right_homehr} />
        <div className={style.right_homecontainer}>
          <div className={style.right_homewrapper}>
            <h3 className={style.right_homeh3}>
              <Link to="/panelcomment">
                {" "}
                <FontAwesomeIcon
                  icon={faMessage}
                  className={style.home_faMessage}
                />
              </Link>
              Comments
            </h3>
            <p className={style.right_p}>
              Hello Robin,you have {unReadComments} unread comments!
            </p>
          </div>
          <div className={style.right_homewrapper}>
            <h3 className={style.right_homeh3}>
              <Link to="/panelblog">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className={style.home_faPenToSquare}
                />
              </Link>
              Blog
            </h3>
            <p className={style.right_p}>would you like to post something?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
