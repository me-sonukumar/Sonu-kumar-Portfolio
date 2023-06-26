import React from "react";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0">
      <nav className=" px-[150px] h-20 w-full  flex justify-between  items-center font-medium bg-white shadow ">
        <a
          href="/"
          className="xs:text-[21px] text-2xl ease-in-out duration-300 hover:font-bold  "
        >
          Sonu Kumar
        </a>
        <ul className="md:flex gap-3 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
