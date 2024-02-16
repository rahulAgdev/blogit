import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" className={styles.image} fill/>
      </div>}
      
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.02.24 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1> {item.title} </h1>
        </Link>
        <p className={styles.desc}>
          {item.desc}
        </p>
        <Link href="/" className={styles.link}>Read more</Link>
      </div>
    </div>
  );
};

export default Card;
