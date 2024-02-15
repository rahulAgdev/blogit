import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" className={styles.image} fill/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.02.24 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        </Link>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, at exercitationem minima doloremque accusantium hic repudiandae nisi commodi soluta libero iusto dicta aut quidem voluptatem repellendus maiores asperiores totam impedit.</p>
        <Link href="/" className={styles.link}>Read more</Link>
      </div>
    </div>
  );
};

export default Card;
