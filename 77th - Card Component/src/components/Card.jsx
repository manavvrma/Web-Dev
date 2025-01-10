import profilePic from "../assets/manav id.png";
import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <img
        className="card-img"
        src={profilePic}
        alt="Manav's Profile Picture"
      />
      <h2 className="card-title">Manav Verma</h2>
      <p className="card-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel
        accusamus modi, numquam eos dicta saepe veniam harum
      </p>
      <Button />
    </div>
  );
}

export default Card;
