import React, { Children } from "react";
import "./card.style.scss";

const ProjCard = ({
  picture,
  children,
  skills,
  projectlocation,
  projectcode,
}) => {
  return (
    <div className="project-card">
      <div className="projPicture">
        <img className="card-image" src={picture} alt="" />
        {projectlocation ? (
          <a className="projectlink" href={projectlocation} target="_blank">
            See project
          </a>
        ) : null}

        {projectcode ? (
          <a className="codelink" href={projectcode} target="_blank">
            See the code
          </a>
        ) : null}
      </div>
      <div className="projCardText">
        <h3>About This Project</h3>
        <p>{children}</p>
        <h3>Skills Used</h3>
        <ul>
          {skills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjCard;
