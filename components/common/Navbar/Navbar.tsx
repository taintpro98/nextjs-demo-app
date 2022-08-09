import cn from "clsx";
import { FC } from "react";

const Navbar = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="/about">About</a>
    </div>
  );
};

export default Navbar;
