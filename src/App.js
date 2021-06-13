import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import MainBanner from "./Components/MainBanner";
import Loader from "./Components/Loader";
import ShowAQI from "./showAQI";

function App() {
const [isLoading, setLoadin] = useState(true)
setTimeout(() => { setLoadin(false); }, 3000);

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <MainBanner />
      <div className="main-container">
        <p className="mobile-only text-danger">
          Click on the bar for more info!
        </p>
        <ShowAQI />
      </div>
    </div>
  );
}

export default App;
