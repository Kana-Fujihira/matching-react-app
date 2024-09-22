import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarEmpty from "../../assets/img/starempty.svg";
import StarFavorited from "../../assets/img/starfavorited.svg";
import { randomCatName } from "cat-names"; //npm gives one random name
import styles from "../card/card.module.css";

function Card() {
  // Initialize state as an empty object to track favorite status for each cat
  const [favorites, setFavorites] = useState({});

  // Toggle favorite status for a specific cat by its id
  const handleFavorite = (catId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [catId]: !prevFavorites[catId], // Toggle the favorite status
    }));
  };

  const allCats = useLoaderData();

  return (
    <>
      {allCats.map((cat) => {
        // Generate a random name for each cat
        const randomCat = randomCatName();

        return (
          <div className={styles.cardContainer} key={cat.id}>
            <img src={cat.url} className={styles.catImageSize} alt={cat.id} />
            {/* Display the random name for each cat */}
            <p className={styles.catName}>{randomCat}</p>
            {favorites[cat.id] ? (
              <img
                onClick={() => handleFavorite(cat.id)}
                src={StarFavorited}
                className={styles.buttonStar}
              />
            ) : (
              <img
                onClick={() => handleFavorite(cat.id)}
                src={StarEmpty}
                className={styles.buttonStar}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default Card;
