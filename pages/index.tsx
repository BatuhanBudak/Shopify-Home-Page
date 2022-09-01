import type { NextPage } from "next";
import HomePage from "../components/HomePage/HomePage";
import Header from "../components/Nav/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
