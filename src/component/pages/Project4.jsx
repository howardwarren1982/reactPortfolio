import React from "react";
import omnifood from "./image/omnifoodmin.png";
import ProjCard from "../project.cards.component/card.component";

const Project4 = () => {
  return (
    <div>
      <ProjCard
        picture={omnifood}
        skills={[
          "Design ",
          "HTML, CSS and JavaScript",
          "Animations",
          "Embedded map",
        ]}
        projectlocation="test"
        projectcode="code"
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
