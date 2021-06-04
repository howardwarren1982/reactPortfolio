import "./styles/App.scss";
import HeroSection from "./component/hero.component/heroSection.component";
import ProjCard from "./component/project.cards.component/card.component";
import SideNave from "./component/sideNav.component/sideNavBar.component";
import Footer from "./component/footer/footer.component";

function App() {
  return (
    <div className="row">
      <HeroSection />
      <div className="flex">
        <SideNave />
        <ProjCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
