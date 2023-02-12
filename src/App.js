import Main from "./Pages/Main";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element=<LandingPage /> />
          <Route path="/exchange" element=<Main /> />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
