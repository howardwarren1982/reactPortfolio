import React from "react";
import jsApp from "./image/jsApp.jpg";
import ProjCard from "../project.cards.component/card.component";

const Project2 = () => {
  return (
    <div>
      <ProjCard picture={jsApp} skills={[]}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure
      </ProjCard>
    </div>
  );
};

export default Project2;
