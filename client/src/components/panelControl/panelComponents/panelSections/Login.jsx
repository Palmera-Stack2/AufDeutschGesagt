import loginStyle from "../panelCss/LoginStyle.module.css";
import flag from "../../../../assets/germany_flag_national_flag.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      userName: formData.get("userName"),
      password: formData.get("password"),
    };
    try {
      const res = await axios.post(`/api/user/login`, data);
      console.log(res.data);
      //  handleLogin();
      navigate("/panelhome");
    } catch (error) {
      console.error("there was an error", error);
    }
  };
  return (
    <div className={loginStyle.hero_login}>
      <div className={loginStyle.left_login}>
        <div className={loginStyle.leftHero_container}>
          <h3>
            Admin Login{" "}
            <FontAwesomeIcon className={loginStyle.lockicon} icon={faLock} />{" "}
          </h3>

          <img src={flag} className={loginStyle.flag} />

          <h2>Welcome ! </h2>
        </div>
      </div>
      <div className={loginStyle.right_login}>
        <form className={loginStyle.login_form} onSubmit={handleSubmit}>
          <label>
            <input
              name="userName"
              type="text"
              required={true}
              placeholder="UserName"
            />
          </label>
          <label>
            <input
              name="password"
              type="password"
              required={true}
              placeholder="Password"
            />
          </label>

          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}
