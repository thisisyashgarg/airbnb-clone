import React from "react";
import star from "../../public/images/star.png";

export default function Card({
  coverImg,
  title,
  stats,
  location,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{stats.rating}</span>
        <span className="grey">({stats.reviewCount}) • </span>
        <span className="grey">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">from {price}$</span> /person
      </p>
    </div>
  );
}
