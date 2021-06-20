import React from "react";
import laptop from "./image/laptop.png";
import ProjCard from "../project.cards.component/card.component";

const Project1 = () => {
  return (
    <div>
      <ProjCard
        picture={laptop}
        skills={[
          "PSD to HTML, CSS and JS ",
          "Adobe XD",
          "SCSS",
          "Flexbox",
          "Pixel Perfect",
          "Responsive",
          "GIT",
        ]}
        projectlocation="Projects/project1/Unique/index.html"
        projectcode="https://github.com/howardwarren1982/UniqueTechSite"
      >
        Translated a static design to HTML, CSS and JavaScript. <br /> The PSD
        can be found:{" "}
        <span>
          {" "}
          <a
            href="https://www.behance.net/gallery/31522763/UNIQUE-TECH-Website-UI-Freebie-"
            target="_blank"
          >
            Here
          </a>{" "}
        </span>
        <br /> <br /> I paid great attention to detail in order to match the
        design as closely as possible. Wrote the code with readability and reuse
        in mind. I broke my scss up into compartmentalized files. Please click
        the "see the code" link to view the source code.
      </ProjCard>
    </div>
  );
};

export default Project1;
