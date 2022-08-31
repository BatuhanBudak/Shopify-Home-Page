import type { NextPage } from "next";
import HomePage from "../components/HomePage/HomePage";
import Header from "../components/Nav/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
};

export default Home;
