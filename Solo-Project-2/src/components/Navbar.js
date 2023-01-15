import globe from "../../public/img/globe.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav-image" src={globe} />
      <h2 className="nav-heading">my travel journal.</h2>
    </nav>
  );
}
