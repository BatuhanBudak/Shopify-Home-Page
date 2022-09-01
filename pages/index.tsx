import type { NextPage } from "next";
import HomePage from "../components/HomePage/HomePage";
import Header from "../components/Nav/Header";
import Footer from "../components/Footer";
import useToggle from "../hooks/useToggle";

const Home: NextPage = () => {
  const [themeMode, toggleThemeMode] = useToggle();
  function toggleMode() {}

  return (
    <div className={`${themeMode ? "ThemeMode-dark" : "ThemeMode-default"}`}>
      <Header toggleThemeMode={toggleThemeMode} />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
