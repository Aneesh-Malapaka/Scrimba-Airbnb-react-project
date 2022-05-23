import React from "react";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";
import "./style.css";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}

        item={item} //here we are sending the whole item itself as an attribute
        //so in the card we will use prop to access the items in the data

        //another way is using spread syntax with object literals
        //it is basically the shorter way of first method. Then in the Card it will be like initial i.e, props.img, etc..
        //Syntax: {...item}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
}
