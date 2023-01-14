import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "../public/images/katie-zaferes.png";
import data from "./data";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map((person) => (
          <Card {...person} key={person.id} />
        ))}
      </section>
    </>
  );
}
