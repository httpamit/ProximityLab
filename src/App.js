import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import MainBanner from "./Components/MainBanner";
import ShowAQI from "./showAQI";

function App() {
  return (
    <div>
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
