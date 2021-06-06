import React from "react";
import "./card.style.scss";

const ProjCard = ({ picture }) => {
  return (
    <div className="project-card">
      <div className="projPicture">
        <img className="card-image" src={picture} alt="" />
        <a href="">See Project</a>
      </div>
      <div className="projCardText">
        <h3>About This Project</h3>
        <p>
          Lorem {picture} ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure
        </p>
        <h3>Skills Used</h3>
        <ul>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
          <li>skill 1</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjCard;
