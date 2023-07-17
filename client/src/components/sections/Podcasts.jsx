import podcastsStyle from "./Podcast.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faCirclePlay,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";
import PodcastCover from "../../assets/PodcastCover.jpg";
import Studio from "../../assets/Studio.jpg";

import { useState, useRef } from "react";
import VorstellungFile from "../../assets/Vorstellung.mp3";

export default function Podcasts() {
  const [isPlaying, setIsPlaying] = useState(false);
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
          <h2>Auf Deutsch Gesagt </h2> <h1>Podcasts</h1>
        </div>
        <div className={podcastsStyle.hrDiv}>
          <hr className={podcastsStyle.Hr} />
        </div>
        <div className={podcastsStyle.podcastsContent}>
          <div className={podcastsStyle.podcastsContentHeader}>
            <div className={podcastsStyle.HeadphonesIcon}>
              <FontAwesomeIcon
                icon={faHeadphones}
                className={podcastsStyle.faHeadphones}
              />
            </div>
            <div className={podcastsStyle.rightImg}>
              <img
                src={Studio}
                alt="Studio-img"
                className={podcastsStyle.studioImg}
              />
            </div>
          </div>
          <div className={podcastsStyle.cardSection}>
            <div className={podcastsStyle.card}>
              <div className={podcastsStyle.cardHeader}>
                <div className={podcastsStyle.cardImg}>
                  <img
                    src={PodcastCover}
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
                <h4>Intro to Podcasts</h4>
                <p>
                Wenn du jetzt neugierig geworden bist, findest du hier alle
                Episoden.
                </p>
              </div>
            </div>
            <div className={podcastsStyle.BtnContainer}>
              <a
                href="https://www.patreon.com/aufdeutschgesagt"
                className={podcastsStyle.browseBtn}
              >
                Browse Podcasts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
