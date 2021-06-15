import React from "react";
import landscape from "./image/Landscape-min.png";
import ProjCard from "../project.cards.component/card.component";

const Project3 = () => {
  return (
    <div>
      <ProjCard
        picture={landscape}
        skills={[
          "Asynchronous javascript ",
          "Fetch data from api",
          "DOM Manipulation",
          "using JSON data",
          "GIT version control",
          "HTML and CSS",
        ]}
        projectlocation="test"
        projectcode="code"
      >
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure
      </ProjCard>
    </div>
  );
};

export default Project3;
