import React from 'react'
import styles from './blogPage.module.css'
import CardList from '../../../components/cardlist/CardList'
import Menu from '../../../components/menu/Menu'
const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams) || 1;
  const {cat} = searchParams;
  // console.log(cat)
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage