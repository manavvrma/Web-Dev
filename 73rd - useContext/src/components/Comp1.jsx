import { useContext } from "react";
import { counterContext } from "../context/context";

const Comp1 = () => {
  const value = useContext(counterContext);
  return <div>{value.count}</div>;
};

export default Comp1;
