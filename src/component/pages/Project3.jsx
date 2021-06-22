import React from "react";
import jsApp from "./image/JsApp.png";
import ProjCard from "../project.cards.component/card.component";

const Project3 = () => {
  return (
    <div>
      <ProjCard
        picture={jsApp}
        skills={[
          "Asynchronous JavaScript ",
          "Fetch data from api",
          "DOM Manipulation",
          "using JSON data",
          "GIT version control",
          "HTML and CSS",
        ]}
        projectlocation="Projects/project3/SportsApp/SportsApp/index.html"
        projectcode="https://github.com/howardwarren1982/reactPortfolio/tree/master/public/Projects/project3/SportsApp/SportsApp"
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
