import React from "react";
import Grid from "../PhotoGrid.png";

export default function Hero() {
  return (
    <section className="Hero">
      <img src={Grid} alt="grid" className="HeroImg" />
      <h1 className="HeroHead">Online Experiences</h1>
      <p className="HeroPara">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
