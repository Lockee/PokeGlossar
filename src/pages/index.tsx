import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Overview } from "./Overview/Overview";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Overview />
    </div>
  );
};

export default Home;
