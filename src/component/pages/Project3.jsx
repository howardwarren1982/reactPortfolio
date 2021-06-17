import React from "react";
import landscape from "./image/Landscape-min.png";
import ProjCard from "../project.cards.component/card.component";

const Project3 = () => {
  return (
    <div>
      <ProjCard
        picture={landscape}
        skills={[
          "Asynchronous JavaScript ",
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
        This app allows you to look up athletes. The api is found at
        https://www.thesportsdb.com/. I did this project to get some practice
        dealing with api calls. I created this app using fetch() and then() but
        the code could be much easier to read using async and await.
      </ProjCard>
    </div>
  );
};

export default Project3;
