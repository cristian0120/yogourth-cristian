import Image from "next/image";

import styles from "./page.module.css";
import whatsapp from "../assets/image/whatsapp.png";
import vector from "../assets/image/vector.png";
import yogourth from "../assets/image/yogourth.png";

export default function Home() {
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
        <button
          className={styles.buttonWhatsapp}
         
        >Order yours now</button>
        <Image src={whatsapp} className={styles.whatsapp} alt=" whatsapp" />
        <Image src={yogourth} className={styles.yogourth} alt=" yogourth" />
      </div>
    </main>
  );
}
