// import { useState } from "react";

import heroStyle from "./Hero.module.css";


export default function Hero() {

  // const [heroImage, setHeroImage] = useState("../src/assets/hero-image.jpg")

  return (
    <div className={heroStyle.heroSection}>

      <div className={heroStyle.heroImage}>
        {/* <img className="hero-image" src={heroImage}></img> */}
      </div>

    </div>
  )
}
