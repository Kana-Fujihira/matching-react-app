/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import CatShilhouette from "../../assets/img/catsilhouette.svg";
import CatLogo from "../../assets/img/catlogo.svg";
import styles from "../inscription/inscription.module.css";

function Connection() {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${URL}/api/login`, {
        method: "POST",
        headers: {
          "Contenct-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.log("Une erreur est survenue lors de l'inscription");
    }
  };

  return (
    <>
      <div className={styles.formTitle}>
        <img src={CatLogo} className={styles.formImage} alt="FormTitleImage" />
        <h2>Catinder</h2>
      </div>
      <Form method="post" onSubmit={handleSubmit}>
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
            Log in
          </button>
          <p>Je n'ai pas un compte.</p>
          <Link to="/inscription">Inscription</Link>
        </div>
      </Form>
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

export default Connection;
