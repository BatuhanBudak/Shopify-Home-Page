import React from "react";
import Banner from "./Banner";
import Community from "./Community";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <main role="main" id="main">
      <div className="homepage">
        <Hero />
        <Banner />
        <Community />
      </div>
    </main>
  );
}
