import Comp1 from "./Comp1";
import { counterContext } from "../context/context";
import { useContext } from "react";

const Button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Comp1 />
        </span>
        I am a button
      </button>
    </div>
  );
};

export default Button;
