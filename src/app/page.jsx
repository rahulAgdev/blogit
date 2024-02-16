import Footer from "../../components/Footer/Footer";
import CardList from "../../components/cardlist/CardList";
import CategoryList from "../../components/categoryList/CategoryList";
import Featured from "../../components/featured/Featured";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import styles from "./homepage.module.css";
export default async function Home() {

  return <div className={styles.container}>

  <Featured />
  <CategoryList />
  <div className={styles.content}>
    <CardList />
    <Menu />
  </div>
    
  </div>;
}
