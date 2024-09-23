import { useState } from "react";
import CatShilhouette from "../../assets/img/catsilhouette.svg";
import CatLogo from "../../assets/img/catlogo.svg";
import styles from "../inscription/inscription.module.css";

function Inscription() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <div className={styles.formTitle}>
        <img src={CatLogo} className={styles.formImage} alt="FormTitleImage" />
        <h2>Catinder</h2>
      </div>
      <div className={styles.formContainder}>
        <label>
          <h3>Address email</h3>
        </label>
        <input
          type="email"
          placeholder="abcde@gmail.com"
          name="email"
          value={values.email}
          onChange={handleInput}
        ></input>
        <label>
          <h3>Mot de pass</h3>
        </label>
        <input
          type="password"
          placeholder="123Cat!"
          name="password"
          value={values.password}
          onChange={handleInput}
        ></input>
        <button type="submit" className={styles.formSubmitButton}>
          Sign in
        </button>
      </div>
      <div className={styles.formFooter}>
        <p>Kana FUJIHIRA - Simplon application CDA @2024</p>
        <img
          src={CatShilhouette}
          className={styles.formImage}
          alt="CatFooterIcon"
        />
      </div>
    </>
  );
}

export default Inscription;
