import podcastsStyle from "./Podcast.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";
import cover from "../../assets/cover.png";
import Studio from "../../assets/Studio.jpg";
import { useState, useRef, useEffect } from "react";
import VorstellungFile from "../../assets/Vorstellung.mp3";
import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Podcasts() {
  const [rating, setRating] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetchCRating();
  }, [rating]);

  const fetchCRating = async () => {
    try {
      const res = await axios.get(`/api/comment/user/rating`);
      console.log(res.data);
      setRating(res.data);
      console.log(rating);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const renderStars = () => {
    const starsCount = Math.ceil((rating / 100) * 5); // Calculate the number of stars based on the percentage
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      // Render filled stars
      if (i <= starsCount) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
      }
    }

    return stars;
  };
  const Vorstellung = useRef(null);
  const toggleAudio = () => {
    const audio = Vorstellung.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div id="podcasts" className={podcastsStyle.podcastsSection}>
      <div className={podcastsStyle.podcastsContainer}>
        <div className={podcastsStyle.podcastsHeader}>
          <h3 className={podcastsStyle.podcasth3}>Auf Deutsch gesagt! </h3>{" "}
          <h2 className={podcastsStyle.podcasth2}>Podcast</h2>
        </div>
        <div className={podcastsStyle.hrDiv}>
          <hr className={podcastsStyle.Hr} />
        </div>
        <div className={podcastsStyle.podcastsContent}>
          <div className={podcastsStyle.HeadphonesIcon}>
            {" "}
            <p className={podcastsStyle.reviews_text}>Bewertungen</p>
            {renderStars()}
            {/* <FontAwesomeIcon
              icon={faHeadphones}
              className={podcastsStyle.faHeadphones}
            /> */}
          </div>

          <div className={podcastsStyle.cardSection}>
            <div className={podcastsStyle.card}>
              <div className={podcastsStyle.cardHeader}>
                <div className={podcastsStyle.cardImg}>
                  <img
                    src={cover}
                    alt="podcastCover "
                    className={podcastsStyle.coverImg}
                  />
                </div>
                <div className={podcastsStyle.playButton}>
                  <div>
                    <FontAwesomeIcon
                      icon={isPlaying ? faCircleStop : faCirclePlay}
                      className={podcastsStyle.faCirclePlay}
                      onClick={toggleAudio}
                    />
                    <audio ref={Vorstellung} src={VorstellungFile} />
                  </div>
                </div>
              </div>
              <div className={podcastsStyle.cardText}>
                <h4 className={podcastsStyle.cardTextH4}>Intro to Podcasts</h4>
                <p className={podcastsStyle.cardTextPara}>
                  Wenn du jetzt neugierig geworden bist, findest du hier alle
                  Episoden.
                </p>
              </div>
            </div>
          </div>
          <div className={podcastsStyle.rightImg}>
            <img
              src={Studio}
              alt="Studio-img"
              className={podcastsStyle.studioImg}
            />
          </div>
        </div>
        <button className={podcastsStyle.podcastBtn}>
          <a
            target="blanc" href="https://shows.acast.com/aufdeutschgesagt"
            className={podcastsStyle.browseBtn}
          >
            Zum Podcast
          </a>
        </button>
      </div>
    </div>
  );
}
