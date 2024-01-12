import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import CosplayUniverse from "./page/CosplayUniverse";
import FirstCosplay from "./page/FirstCosplay";
import MadeCostumes from "./page/MadeCostumes";
import Competition from "./page/Competition";
import Home from "./page/Home";


function App() {
  return (
    <div className="App">
      <Header/>
      <section className="corps_page">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/univers-cosplay" element={<CosplayUniverse/>}></Route>
          <Route path="/premier-cosplay" element={<FirstCosplay/>}></Route>
          <Route path="/concevoir-costume" element={<MadeCostumes/>}></Route>
          <Route path="/concours" element={<Competition/>}></Route>
        </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
