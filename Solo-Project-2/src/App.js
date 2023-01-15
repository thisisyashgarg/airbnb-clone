import React from "react";
import ReactDOM from "react-dom/client";
import data from "../public/data/data";
import Navbar from "./components/Navbar";
import Card from "./components/Card.js";

function App() {
  return (
    <>
      <Navbar />
      <section>
        {data.map((item) => {
          return <Card {...item} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
