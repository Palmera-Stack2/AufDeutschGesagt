// import { useState } from "react";

import heroStyle from "./Hero.module.css";
import heroImage from "../../assets/hero-image.jpg";


export default function Hero() {

  // const [heroImage, setHeroImage] = useState("../src/assets/hero-image.jpg")

  return (
    <div id="home" className={heroStyle.heroSection}>

      <div className={heroStyle.heroImageDiv}>
        <img className={heroStyle.heroImg} src={heroImage}></img>
      </div>

    </div>
  )
}
