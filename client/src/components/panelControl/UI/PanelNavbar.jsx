import { HashLink } from "react-router-hash-link";
import style from "../panelComponents/panelCss/PanelNavbarStyle.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PanelNavbar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await axios.get("/api/user/logout");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav className={style.panelNavbar}>
      <button className={style.btn_logout}>
        <HashLink to={"/panelhome"} className={style.link}>
          {" "}
          Home
        </HashLink>
      </button>
      <button className={style.btn_logout}>
        <HashLink to={"/panelblog"} className={style.link}>
          {" "}
          Blog{" "}
        </HashLink>
      </button>
      <button className={style.btn_logout}>
        <HashLink to={"/panelcomment"} className={style.link}>
          {" "}
          Comments
        </HashLink>
      </button>

      <button className={style.btn_logout} onClick={handleSignOut}>
        Log out
      </button>
    </nav>
  );
}
