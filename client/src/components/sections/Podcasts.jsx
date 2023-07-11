
import podcastStyle from './Podcast.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

import { faPause } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react';
import onAirImg from '../../assets/onair-modified.png'


export default function Podcasts() {

  const onAir = onAirImg;

  const audioRef = useRef(null);
  const [playAudio, setPlayAudio] = useState(false);

  const handlePlayAudio = () => {

    if (!playAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setPlayAudio(!playAudio);
  };




  return (
    <div id="podcast" className={podcastStyle.podcast}>

      <div className={podcastStyle.podcastHeader}>
        <h2>Auf Deutsch Gesagt</h2>

        <h1 >Podcasts</h1>

      </div>
      <div className={podcastStyle.hrDiv}>
        <hr className={podcastStyle.podcastHr} />
      </div>

      <div className={podcastStyle.headphonesWrapper}><FontAwesomeIcon icon={faHeadphones} className={podcastStyle.headphones} /></div>



      <div className={podcastStyle.podcastContainer}>

        <div className={podcastStyle.wrapper}>
          <div className={podcastStyle.boxCard}><div><img src='../src/assets/cover-cut-modified.png' alt='robin-cover-round-image' width="150px" height="150px" /><FontAwesomeIcon icon={playAudio ? faPause : faCirclePlay} className={podcastStyle.play} onClick={handlePlayAudio} /></div>



            <div className={podcastStyle.boxcardText}><h3>Willkommen zu meiner Podcast-Sektion</h3>   <p>Wenn du jetzt neugierig geworden bist, findest du hier alle Episoden.</p></div>  <div className={podcastStyle.podcastButton}><a href='https://shows.acast.com/aufdeutschgesagt' target='blank'><button>ZUM PODCAST</button></a></div></div>
          <div className={podcastStyle.boxImage}><img src={onAir} alt='robin-cover-round-image' width="250px" height="250px" /></div>



        </div>
        <audio ref={audioRef} src="../src/assets/audio.mp3" />
      </div>

      {/* <div className={podcastStyle.socialMedia}><img src='../src/assets/acastLogo2.png'></img ><img src='../src/assets/patreon.png'></img>
        <img src='../src/assets/Itunes.png'></img>




      </div> */}

    </div>
  );
}
