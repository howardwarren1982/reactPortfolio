import React from "react";
import laptop from "./image/laptop.png";
import ProjCard from "../project.cards.component/card.component";

const Project1 = () => {
  return (
    <div>
      <ProjCard
        picture={laptop}
        skills={[
          "HTML/CSS - UI",
          "JavaScript - asynchronous",
          "fetch from api",
          "pulling data from JSON",
          "DOM manipulation",
        ]}
        projectlocation="test"
        projectcode="code"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure
      </ProjCard>
    </div>
  );
};

export default Project1;
