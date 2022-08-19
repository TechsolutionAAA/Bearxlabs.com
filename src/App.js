import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
// import Shop from "./pages/Shop";
import Whitelist from "./pages/Whitelist";
// import RootV1Claim from "./pages/RootV1Claim";
import BearSteak from "./pages/BearSteak";
import FaqPage from "./pages/FaqPage";
import RootPage from "./pages/RootPage";
import About from "./pages/About";
import Utility from "./pages/Utility";
import Lore from "./pages/Lore";
import CommingSoon from "./components/CommingSoon";
import RoadMap from "./pages/RoadMap";
import Collection from "./pages/Collection";
import Token from "./pages/Token";
import TokenStaking from "./pages/TokenStaking";
// import LPTokenStaking from "./pages/LPTokenStaking";
import BurnROOTxToGetSROOTx from "./pages/BurnROOTxToGetSROOTx";
import Beta from "./pages/Beta";
import Marketplace from "./pages/Marketplace";
import ROOTxLeaderboard from "./pages/ROOTxLeaderboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about/" element={<About />} />
        <Route path="/bearx-collections/" element={<Collection />} />
        <Route path="/token/" element={<Token />} />
        <Route path="/tokenstaking/" element={<TokenStaking />} />
        {/* <Route path="/LPtokenstaking/" element={<LPTokenStaking/>}/> */}
        <Route path="/BurnROOTxToGetSROOTx" element={<BurnROOTxToGetSROOTx />} />
        <Route path="/root/" element={<RootPage />} />
        <Route path="/faq/" element={<FaqPage />} />
        <Route path="/bear-steak/" element={<BearSteak />} />
        {/* <Route path="/rootx-v1-claim/" element={<RootV1Claim/>}/> */}
        {/* <Route path="/shop/" element={<Shop/>}/> */}
        <Route path="/ROOTx-leaderboard/" element={<ROOTxLeaderboard />} />
        <Route path="/whitelist/" element={<Whitelist />} />
        <Route path="/resources/" element={<Resources />} />
        <Route path="/collections/" element={<Utility />} />
        <Route path="/lores/" element={<Lore />} />
        <Route path="/roadmap/" element={<RoadMap />} />
        <Route path="/beta/" element={<Beta />} />
        <Route path="/coming-soon/" element={<CommingSoon />} />
        <Route path="/marketplace/" element={<Marketplace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
