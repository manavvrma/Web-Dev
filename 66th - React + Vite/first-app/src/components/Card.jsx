// import React from 'react'
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
        alt=""
        width={333}
        style={{ border: "2px solid black" }}
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
