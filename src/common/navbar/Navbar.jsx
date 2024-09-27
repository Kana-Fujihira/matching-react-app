import { Link } from "react-router-dom";
import CatPow from "../../assets/img/catpow.svg";
import Favorite from "../../assets/img/bookmark.svg";
import styles from "../navbar/navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContainerSmall}>
          <Link to="/connexion">
            <img className={styles.navbarImg} src={CatPow} alt="appLogo" />
          </Link>
          <p>Logout</p>
        </div>
        <Link to="/">
          <p className={styles.navbarTitle}>Catinder</p>
        </Link>
        <div className={styles.navbarContainerSmall}>
          <Link to="/account">
            <img className={styles.navbarImg} src={Favorite} alt="accoutIcon" />
          </Link>
          <p>Mon compte</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
