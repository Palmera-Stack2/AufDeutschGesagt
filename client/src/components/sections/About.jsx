import { useState } from 'react';
import aboutStyle from './About.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'



export default function About() {


  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  }


  return (
    <div id="about" className={aboutStyle.pageSection}>

      <div className={aboutStyle.aboutHeader}>
        <h3 className={aboutStyle.abouth3}>Auf Deutsch gesagt!</h3>
        <h2 className={aboutStyle.abouth2}>Über Mich</h2>

      </div>

      <div className={aboutStyle.hrDiv}>
        <hr className={aboutStyle.aboutHr} />
      </div>


      <div className={aboutStyle.wrapper}>
        <div className={aboutStyle.iframe}>
          <div className={aboutStyle.videoDiv}>
            <iframe
              src="https://www.youtube.com/embed/idqRdJmWJUI"
              title="YouTube video player"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>
        <div className={aboutStyle.textAbout}>
          <h3 className={aboutStyle.aboutH3}>Über Robin</h3>
          <p className={aboutStyle.aboutPara}>Kurz gesagt:
            Deutscher Muttersprachler
            Master of Education (Universität Hamburg)
            Zertifizierter Lehrer für DaZ (Deutsch als Zweitsprache)
            Content-Creator
            Schlagzeuger
            … Mensch
            {showAll ? (<span className={aboutStyle.aboutSpan}> <br />
              <br />Hallo und herzlich willkommen, <br />
              <br /> ich bin Robin, Lehrer aus Hamburg und seit 2019 kreativer Kopf von „Auf Deutsch gesagt!“.
              Als ich 2018 nach meinem Lehramtsstudium als Fremdsprachenassistent in England war, um meine ersten Erfahrungen als Deutschlehrer zu machen, habe ich schnell gemerkt, dass ich große Freude an der Vermittlung der deutschen Sprache habe
              .<br />
              <br /> Auch zeigte sich jedoch, dass meine Vorstellung von Fremdsprachenerwerb noch nicht in den Schulen angekommen war.
              Besonders das Lernmaterial für forgeschrittene Lernende war in meinen Augen weder ansprechend noch authentisch. Da ich als auditiver Lerntyp sehr gute Erfolge durch das Hören von englischen Podcasts gemacht hatte, kam mir die Idee, nach geeigneten Podcasts für Deutschlernende zu suchen. <br />
              <br />Da meine Suche damals ins Leere lief, startete ich meinen eigenen Podcast für fortgeschrittene Lernende. Das war die Geburtsstunde von „Auf Deutsch gesagt!“.

              Neben meinem ambitionierten Hobby auf diesem Kanal bin ich Lehrer an einer beruflichen Schule in Hamburg.  <br />
              <br /> Ich liebe es, mit Menschen zu arbeiten, die wissen, was sie wollen und sehe mich als Begleiter auf diesem Weg. Kreativität spielt dabei immer eine wichtige Rolle. Diese lebe ich selbst in meinen Inhalten auf den sozialen Netzwerken als auch am Schlagzeug in meinen Bands aus.
              Wenn du mehr erfahren willst, gucke dich hier ein bisschen um, oder kontaktiere micht direkt.
              Dein, Robin <FontAwesomeIcon icon={faHeart} />






            </span>) : (<span>...</span>)
            }</p>
          <button className={aboutStyle.aboutBtn} onClick={toggleShowAll}> {showAll ? 'Weniger lesen' : 'Mehr lesen'}</button>
        </div>


      </div>
    </div>
  );
}
