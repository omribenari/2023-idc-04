import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"} style={{ margin: 30 }}>
        Home
      </Link>
      <Link to={"/about"}>About Me</Link>
    </div>
  );
};

export default Header;
