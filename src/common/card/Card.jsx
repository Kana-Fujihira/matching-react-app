import { useState } from "react";
import StarEmpty from "../../assets/img/starempty.svg";
import StarFavorited from "../../assets/img/starfavorited.svg";
import styles from "../card/card.module.css";

function Card() {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <o>here will be cat image</o>
        {favorite === false ? (
          <img
            onClick={handleFavorite}
            src={StarEmpty}
            className={styles.buttonStar}
          />
        ) : (
          <img
            onClick={handleFavorite}
            src={StarFavorited}
            className={styles.buttonStar}
          />
        )}
      </div>
    </>
  );
}

export default Card;
