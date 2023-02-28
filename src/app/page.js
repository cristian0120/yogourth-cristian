"use client";

import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import whatsapp from "../assets/image/whatsapp.png";
import vector from "../assets/image/vector.png";
import yogourth from "../assets/image/yogourth.png";

function Button({ onClick }) {
  return (
    <div className={styles.mainWhatsap}>
      <button onClick={onClick} className={styles.buttonWhatsapp}>
        Pide el tuyo ahora{" "}
      </button>

      <Image src={whatsapp} className={styles.whatsapp} alt=" whatsapp" />
    </div>
  );
}

export default function Home() {
  const redirectToWhatsApp = () => {
    const phoneNumber = "+541234567890"; // número de teléfono al que deseas enviar un mensaje
    const message = "¡Hola! ¿Cómo estás?"; // mensaje que deseas enviar

    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
      "_blank"
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}> CREMOSIDAD</h1>
          <h1 className={styles.title}> NATURAL</h1>
        </div>
        <Image src={vector} className={styles.vector} alt=" vector" />
        <p className={styles.description}>
          Descubre por qué nuestro yogurt es la mejor opción para tu dieta:
          ¡pruébalo ahora!
        </p>

        <Button onClick={redirectToWhatsApp} />
      </div>
      <Image src={yogourth} className={styles.yogourth} alt=" yogourth" />
    </main>
  );
}
