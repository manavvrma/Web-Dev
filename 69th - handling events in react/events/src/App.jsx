import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Hello");
  const [form, setForm] = useState({ email: "", phone: "" });

  const handleClick = () => {
    alert("Clicked");
  };

  // const handleMouseOver = () => {
  //   alert("Mouse Over");
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a mouse over
      </div> */}

      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
