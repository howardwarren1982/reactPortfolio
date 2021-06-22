import React from "react";
import "./sideNavBar.style.scss";
import { Link } from "react-router-dom";

const SideNave = () => {
  return (
    <div className="nav-templete">
      <Link to="/reactPortfolio">Project 1</Link>
      <Link to="/proj2">Project 2</Link>
      <Link to="/proj3">Project 3</Link>
      <Link to="/proj4">Project 4</Link>
      <Link to="/proj5">Project 5</Link>
    </div>
  );
};

export default SideNave;
