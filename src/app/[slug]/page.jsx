import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../../../components/menu/Menu";
import Image from "next/image";
import Comments from "../../../components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>15/2/2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              fugit aut ad, esse quod a rem quis ullam, impedit rerum iure.
              Deserunt minus, ullam delectus quidem commodi sit recusandae
              vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, molestiae nemo natus sunt reprehenderit tenetur ut quas
              suscipit velit saepe cupiditate, quibusdam quidem a odio fugit
              doloribus in nisi obcaecati?
            </p>
            <h4>Lorem ipsum dolor, sit amet </h4>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem ad reiciendis aspernatur
              exercitationem tenetur quae nam sapiente saepe voluptatum
              molestiae voluptate, natus fugit deserunt qui tempora hic neque
              ducimus sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              fugit aut ad, esse quod a rem quis ullam, impedit rerum iure.
              Deserunt minus, ullam delectus quidem commodi sit recusandae
              vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, molestiae nemo natus sunt reprehenderit tenetur ut quas
              suscipit velit saepe cupiditate, quibusdam quidem a odio fugit
              doloribus in nisi obcaecati?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
