import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch categories");
  }
  return res.json();
};
const CardList = async () => {
  const date = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  );
};

export default CardList;
