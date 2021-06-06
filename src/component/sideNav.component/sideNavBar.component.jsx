import React from "react";
import "./sideNavBar.style.scss";
import CustomButton from "../navButtons.component/customButton.component";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SideNave = () => {
  return (
    <div className="nav-templete">
      <Router>
        <Link to="/">ProJ 1</Link>
        <Link to="/proj2">ProJ 2</Link>
        <Link to="/proj3">ProJ 3</Link>
        <Link to="/proj4">ProJ 4</Link>
        <Link to="/proj5">ProJ 5</Link>
      </Router>
    </div>
  );
};

export default SideNave;
