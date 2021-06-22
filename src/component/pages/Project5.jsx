import React from "react";
import omnifood from "./image/omnifood.png";
import ProjCard from "../project.cards.component/card.component";

const Project5 = () => {
  return (
    <div>
      <ProjCard
        picture={omnifood}
        skills={[
          "jQuery",
          "HTML, CSS and JavaScript",
          "Animations",
          "basic SEO",
          "Responsive",
          "Flexbox",
          "GIT",
        ]}
        projectlocation="Projects/project5/omnifoodContents/index_omni.html"
        projectcode="https://github.com/howardwarren1982/reactPortfolio/tree/master/public/Projects/project5/omnifoodContents"
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
