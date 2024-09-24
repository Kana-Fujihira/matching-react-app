import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarEmpty from "../../assets/img/starempty.svg";
import StarFavorited from "../../assets/img/starfavorited.svg";
import { randomCatName } from "cat-names"; //npm gives one random name
import styles from "../card/card.module.css";

function Card() {
  // Initialize state as an empty object to track favorite status for each cat
  const [favorites, setFavorites] = useState({});

  // Initialize state for storing random names for each cat
  const [catNames, setCatNames] = useState({});

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
        // Generate a random name for each cat , this function avoid the changing cat name each time user tap the favorite button
        if (!catNames[cat.id]) {
          setCatNames((prevCatNames) => ({
            ...prevCatNames,
            [cat.id]: randomCatName(),
          }));
        }
        // Showing breed property if breed is existed.
        const breed =
          cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;

        return (
          <div className={styles.cardContainer} key={cat.id}>
            <img src={cat.url} className={styles.catImageSize} alt={cat.id} />
            {/* Display the random name for each cat */}
            {breed ? (
              <>
                <p className={styles.catName}>Race : {breed.name}</p>
                <p className={styles.catName}>Origine : {breed.origin}</p>
                <p className={styles.catName}>
                  Caractère : {breed.temperament}
                </p>
                <p className={styles.catName}>
                  Poids: {breed.weight.metric} kg
                </p>
              </>
            ) : (
              <p>Breed information is not available</p>
            )}
            <p className={styles.catName}>Nom : {catNames[cat.id]}</p>
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
