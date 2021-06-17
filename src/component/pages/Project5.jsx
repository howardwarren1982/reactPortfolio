import React from "react";
import unemploy from "./image/unemploy-min.png";
import ProjCard from "../project.cards.component/card.component";

const Project5 = () => {
  return (
    <div>
      <ProjCard
        picture={unemploy}
        skills={[
          "jQuery",
          "HTML, CSS and JavaScript",
          "Animations",
          "basic SEO",
          "Responsive",
          "Flexbox",
          "GIT",
        ]}
        projectlocation="test"
        projectcode="code"
      >
        {" "}
        This website was built for an online course. While doing this project I
        was able to learn web design basics, responsive web design, basic SEO,
        adding google analytics and webpage optimization.
      </ProjCard>
    </div>
  );
};

export default Project5;
