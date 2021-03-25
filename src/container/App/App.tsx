import AdVerticalBanner from "../../components/AdVerticalBanner/AdVerticalBanner";
import Header from "../../components/Header";
import HomeDescriptionBlock from "../../components/HomeDescriptionBlock";
import UserInteractionCard from "../../components/UserInteractionCard";
import styles from "./App.module.scss";

import { Solids } from "../../soilds/Solids";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <section>
        <HomeDescriptionBlock />
        <UserInteractionCard />
        <AdVerticalBanner />
      </section>
      <Solids />
    </div>
  );
}

export default App;
