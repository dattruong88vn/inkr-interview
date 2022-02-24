import type { NextPage } from "next";

import Head from "next/head";
import { MainTemplate } from "components";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Inkr Project</title>
        <meta name="description" content="Inkr Project" />
      </Head>

      <MainTemplate />
    </div>
  );
};

export default Home;
