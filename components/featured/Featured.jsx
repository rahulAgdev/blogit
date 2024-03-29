import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b className={styles.bold}>Hey, Rahul here!</b> Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image 
            src="/p1.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eligendi sed corrupti nemo hic, eos quibusdam error voluptas, optio voluptatibus illo, numquam animi dignissimos. Quasi porro cum molestiae nesciunt sint?</p>
          <button className={styles.button}>Read more</button>
        </div>

      </div>
    </div>
  )
}

export default Featured