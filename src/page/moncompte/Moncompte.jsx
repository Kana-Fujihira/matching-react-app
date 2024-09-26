import Navbar from "../../common/navbar/navbar";
import HumanIcon from "../../assets/img/humanicon.svg";
import CheckedIcon from "../../assets/img/checkedicon.svg";
import StarFavorited from "../../assets/img/starfavorited.svg";
import Muta from "../../assets/img/muta.jpg";
import Uber from "../../assets/img/uber.jpg";
import Chatdor from "../../assets/img/chatdor.jpg";

import styles from "../moncompte/moncompte.module.css";
function Moncompte() {
  return (
    <>
      <Navbar />
      <div className={styles.moncompteContainer}>
        <img
          className={styles.moncompteImage}
          src={HumanIcon}
          alt="UserImage"
        />
        <p>Kana</p>
        <p>Lyon</p>
        <img
          className={styles.checkedImage}
          src={CheckedIcon}
          alt="vérification de l'identité checked Image"
        />
        <p>vérification de l'identité</p>{" "}
      </div>

      <div className={styles.cardContainer}>
        <img className={styles.catImageSize} src={Muta} alt="Dammy cat image" />
        <p className={styles.catName}>Race : Munchkin</p>
        <p className={styles.catName}>Origine : Japan </p>
        <p className={styles.catName}>
          Caractère : Affectionate, Friendly,Playful
        </p>
        <p className={styles.catName}>Poids: 4 </p>
        <p className={styles.catName}>Muta</p>
        <img src={StarFavorited} className={styles.buttonStarMoncompte} />
      </div>
      <div className={styles.cardContainer}>
        <img className={styles.catImageSize} src={Uber} alt="Dammy cat image" />
        <p className={styles.catName}>Race : Maine coon</p>
        <p className={styles.catName}>Origine : France </p>
        <p className={styles.catName}>Caractère : Energic, Friendly,Playful</p>
        <p className={styles.catName}>Poids: 8 </p>
        <p className={styles.catName}>Usumo</p>
        <img src={StarFavorited} className={styles.buttonStarMoncompte} />
      </div>
      <div className={styles.cardContainer}>
        <img
          className={styles.catImageSize}
          src={Chatdor}
          alt="Dammy cat image"
        />
        <p className={styles.catName}>Race : Chartreux</p>
        <p className={styles.catName}>Origine : France </p>
        <p className={styles.catName}>Caractère : Gentle, Calm, Patient</p>
        <p className={styles.catName}>Poids: 3 </p>
        <p className={styles.catName}>Chardor</p>
        <img src={StarFavorited} className={styles.buttonStarMoncompte} />
      </div>
    </>
  );
}

export default Moncompte;
