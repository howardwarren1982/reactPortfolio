import React from "react";
import landscape from "./image/Landscape.png";
import ProjCard from "../project.cards.component/card.component";

const Project4 = () => {
  return (
    <div>
      <ProjCard
        picture={landscape}
        skills={[
          "Design ",
          "HTML, CSS and JavaScript",
          "Animations",
          "Embedded map",
        ]}
        projectlocation="Projects/project4/DavisLawnCareProject/index.html"
        projectcode="https://github.com/howardwarren1982/reactPortfolio/tree/master/public/Projects/project4/DavisLawnCareProject"
      >
        {" "}
        I started this project as a landscaping website for a friend. The
        business never got off the ground so I chose to turn it into a template.
        I designed this website.
      </ProjCard>
    </div>
  );
};

export default Project4;
