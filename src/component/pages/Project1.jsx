import React from "react";
import laptop from "./image/laptop.png";
import ProjCard from "../project.cards.component/card.component";

const Project1 = () => {
  return (
    <div>
      <ProjCard picture={laptop} />
    </div>
  );
};

export default Project1;
