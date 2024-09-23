import CatPow from "../../assets/img/catpow.svg";
import Favorite from "../../assets/img/bookmark.svg";
import styles from "../navbar/navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <img className={styles.navbarImg} src={CatPow} alt="appLogo" />
        <p className={styles.navbarTitle}>Catinder</p>
        <img className={styles.navbarImg} src={Favorite} alt="accoutIcon" />
      </div>
    </>
  );
}

export default Navbar;
