import Navbar from "../../common/navbar/navbar";
import HumanIcon from "../../assets/img/humanicon.svg";
import CheckedIcon from "../../assets/img/checkedicon.svg";
import StarFavorited from "../../assets/img/starfavorited.svg";
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
        <img className={styles.catImageSize} alt="Dammy cat image" />
        <p className={styles.catName}>Race : Munchkin</p>
        <p className={styles.catName}>Origine : Japan </p>
        <p className={styles.catName}>
          Caractère : Affectionate, Friendly,Playful
        </p>
        <p className={styles.catName}>Poids: 4 </p>
        <p className={styles.catName}>Muta</p>
        <img src={StarFavorited} className={styles.buttonStarMoncompte} />
      </div>
    </>
  );
}

export default Moncompte;
