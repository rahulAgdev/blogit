import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat||""}`);
  if (!res.ok) {
    throw new Error("failed to fetch categories");
  }
  return res.json();
};

const CardList = async ({ page, cat }) => {
  const {posts, count} = await getData(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev  = POST_PER_PAGE*(page-1) > 0
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      {posts?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
};

export default CardList;
