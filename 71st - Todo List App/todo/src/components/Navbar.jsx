// import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-teal-500 text-black py-6">
      <div className="logo">
        <span className=" text-sm mx-8">AchieveIt</span>
      </div>
      <ul className="flex gap-8 text-sm mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
