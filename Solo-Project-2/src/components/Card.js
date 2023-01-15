import locationIcon from "../../public/img/location.png";

export default function Card({
  title,
  location,
  startDate,
  endDate,
  description,
  imageUrl,
  googleMapsUrl,
}) {
  //   console.log(props);
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} />

      <div className="card-details">
        <div className="card-details--header">
          <img className="location-icon" src={locationIcon} />
          <h5 className="country">{location}</h5>
          <a className="gmaps" href={googleMapsUrl}>
            <p>View on Google Maps</p>
          </a>
        </div>

        <h1 className="card-details--name">{title}</h1>
        <p className="card-details--date">{`${startDate} - ${endDate}`}</p>
        <p className="card-details--description">{description}</p>
      </div>
    </div>
  );
}
