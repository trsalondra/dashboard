import "./App.css";
import AverageRating from "./components/AverageRating";
import Reviews from "./components/Reviews";
import SentimentAnalysis from "./components/SentimentAnalysis";
import Sidebar from "./components/Sidebar";
import WebsiteVisitors from "./components/WebsiteVisitors";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="next-to-sidebar-container">
        <div className="component-container">
          <Reviews />
          <AverageRating />
          <SentimentAnalysis />
        </div>

        <WebsiteVisitors />
      </div>
    </div>
  );
}

export default App;
