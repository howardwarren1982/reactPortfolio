import React from "react";
import jsApp from "./image/jsApp.jpg";
import ProjCard from "../project.cards.component/card.component";

const Project2 = () => {
  return (
    <div>
      <ProjCard
        picture={jsApp}
        skills={[
          "PSD to HTML, CSS and JS ",
          "Adobe XD",
          "Flexbox",
          "Pixel Perfect",
          "Responsive",
          "GIT",
        ]}
        projectlocation="Projects/project2/psdtohtml1/index.html"
        projectcode="code"
      >
        Translated a static design to HTML, CSS and JavaScript. <br /> The PSD
        can be found:{" "}
        <span>
          {" "}
          <a
            href="https://www.dropbox.com/s/ptddnyit4s5o6ky/WebSite.psd?dl=0"
            target="_blank"
          >
            Here
          </a>{" "}
        </span>
        <br /> <br /> This was a pixel perfect conversion. Wrote the code with
        readability and reuse in mind. Used comments in the css for easy
        reference. I did this project to keep my skills sharp in hand coding a
        website from scratch
      </ProjCard>
    </div>
  );
};

export default Project2;
