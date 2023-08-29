import Newsletter from "../UI/Newsletter";
import footerStyle from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import insta from "../../assets/insta.png";
import itunes from "../../assets/Itunes.png";
import patreon from "../../assets/patreon.png";
import facebook from "../../assets/face.png";
import youtube from "../../assets/youtube.png";
import pinImg from "../../assets/flag-pin.png";

export default function Footer() {
  return (
    <div id="kontakt" className={footerStyle.footerContainer}>
      <div className={footerStyle.hrDiv}>
        <hr className={footerStyle.footerHr} />
      </div>

      <div className={footerStyle.flagPin}>
        <img src={pinImg} alt="flag-pin"></img>
        <div className={footerStyle.h3footer}>
          <h3 className={footerStyle.footer_h3}>Auf Deutsch gesagt!</h3>
        </div>
      </div>

      {/* <dvi className={footerStyle.direktKontakt}>
        <p className={footerStyle.direktParagraph}>Du hast Fragen oder Anregungen? </p>
        <p className={footerStyle.direktParagraph}>Dann kontaktiere mich direkt!</p>
        <p className={footerStyle.mail}>aufdeutschgesagt@gmx.de</p>
      </dvi> */}

      <div className={footerStyle.newsletterWrapper}>
        {/* <div className={footerStyle.follow}><img src="./src/assets/follow.png"></img></div> */}
        <div className={footerStyle.socialIcons}>
          <a href="https://www.instagram.com/aufdeutschgesagt" target="blanc">
            <img src={insta}></img>
          </a>

          <a
            href="https://podcasts.apple.com/us/podcast/id1455018378?mt=2"
            target="blanc"
          >
            <img src={itunes}></img>
          </a>

          <a
            href="https://www.patreon.com/aufdeutschgesagt/about"
            target="blanc"
          >
            {" "}
            <img src={patreon}></img>
          </a>

          <a
            href=" https://www.facebook.com/Auf-Deutsch-gesagt-Podcast-2244379965835103/"
            target="blanc"
          >
            <img src={facebook}></img>
          </a>

          <a href="https://www.youtube.com/c/AufDeutschgesagt" target="blanc">
            <img src={youtube}></img>
          </a>
        </div>

        <div className={footerStyle.newsLetterDiv}>
          <Newsletter />
        </div>
      </div>

      <div className={footerStyle.copyright}>
        <p>Auf Deutsch gesagt &copy; 2023</p>
        <p className={footerStyle.palmera}>
          Palmera Development
          <FontAwesomeIcon className={footerStyle.heart} icon={faHeart} />
        </p>
      </div>
    </div>
  );
}
