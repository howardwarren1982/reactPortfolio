import "./styles/App.scss";
import HeroSection from "./component/hero.component/heroSection.component";
import SideNave from "./component/sideNav.component/sideNavBar.component";
import Footer from "./component/footer/footer.component";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Project1 from "./component/pages/Project1";
import Project2 from "./component/pages/Project2";
import Project3 from "./component/pages/Project3";
import Project4 from "./component/pages/Project4";
import Project5 from "./component/pages/Project5";

function App() {
  return (
    <div className="row">
      <HeroSection />
      <div className="flex">
        <SideNave />
        <BrowserRouter>
          <Switch>
            {" "}
            <Route exact path="/" component={Project1} />
            <Route path="/proj2" component={Project2} />
            <Route path="/proj3" component={Project3} />
            <Route path="/proj4" component={Project4} />
            <Route path="/proj5" component={Project5} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
