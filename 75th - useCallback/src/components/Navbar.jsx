import { memo } from "react";

const Navbar = (props) => {
  console.log("navbar is rendered");
  return (
    <div>
      I am a {props.adjective} Navbar
      <button
        onClick={() => {
          props.getAdjective();
        }}
      >
        {props.getAdjective()}
      </button>
    </div>
  );
};

export default memo(Navbar);
