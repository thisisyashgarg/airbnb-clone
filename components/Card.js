import React from "react";
// import person from "../images/katie-zaferes.png";
import star from "../images/star.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card({
  img,
  reviewCount,
  title,
  rating,
  country,
  price,
}) {
  return (
    <div className="card">
      <img src={img} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) • </span>
        <span className="grey">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">from {price}$</span> /person
      </p>
    </div>
  );
}
