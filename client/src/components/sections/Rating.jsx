import ratingStyle from "./Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleUser } from "@fortawesome/free-solid-svg-icons";
export default function Rating() {
  return (
    <div id="rating" className={ratingStyle.ratingSection}>
      <div className={ratingStyle.ratingContainer}>
        <div className={ratingStyle.ratingHeader}>
          <h3>what my student saying about me</h3>
        </div>
        <div className={ratingStyle.hrDiv}>
          <hr className={ratingStyle.Hr} />
        </div>
        <div className={ratingStyle.ratingWrapper}>
          {/* here will be the rating cards with name and icon on the top and under that will have the rating text  then rating stars
           */}
          <div className={ratingStyle.ratingCard}>
            <div className={ratingStyle.cardHeader}>
              <h4>John Doe</h4>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <p className={ratingStyle.ratingText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac lectus enim. Duis ac velit vitae quam pulvinar fermentum.
            </p>
            <div className={ratingStyle.hrDiv}>
              <hr className={ratingStyle.Hr} />
            </div>
            <div className={ratingStyle.ratingStars}>
              <FontAwesomeIcon icon={faStar} className={ratingStyle.starIcon} />
              <FontAwesomeIcon icon={faStar} className={ratingStyle.starIcon} />
              <FontAwesomeIcon icon={faStar} className={ratingStyle.starIcon} />
              <FontAwesomeIcon icon={faStar} className={ratingStyle.starIcon} />
              <FontAwesomeIcon icon={faStar} className={ratingStyle.starIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
