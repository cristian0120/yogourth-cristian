import Image from "next/image";
import React from 'react';
import styles from "./page.module.css";
import whatsapp from "../assets/image/whatsapp.png";
import vector from "../assets/image/vector.png";
import yogourth from "../assets/image/yogourth.png";

function Button({ onClick }) {
  return (
    <button onClick={onClick}>Click me</button>
  );
}


export default function Home() {

 

  const redirectToWhatsApp = () => {
    const phoneNumber = "+541234567890"; // número de teléfono al que deseas enviar un mensaje
    const message = "¡Hola! ¿Cómo estás?"; // mensaje que deseas enviar
  
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  }
  

  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={styles.containerTitle} >
        <h1 className={styles.title}> CREAMY</h1>
        <h1 className={styles.title}> NATURAL</h1>
        </div>
        <Image src={vector} className={styles.vector} alt=" vector" />
        <p className={styles.p}>
        Discover why our yogurt is the best option for your diet:
          try it now!
        </p>
        
  <a href={"https://api.whatsapp.com/send?phone=573116947887&text=¡Hola! me gustaría comprar este producto"}  target="_blank" className={styles.buttonWhatsapp}
         
        >Order yours now</a>
         <Button onClick={redirectToWhatsApp}/>
         
        <Image src={whatsapp} className={styles.whatsapp} alt=" whatsapp" />
        <Image src={yogourth} className={styles.yogourth} alt=" yogourth" />
      </div>
    </main>
  );

}
