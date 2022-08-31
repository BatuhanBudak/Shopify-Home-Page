import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <main>
      <div className="homepage">
        <Hero />
        <Banner />
      </div>
    </main>
  );
}
