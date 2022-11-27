import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/includes/Nav";
import Home from "./components/screens/Home";
import UiEngineer from "./components/screens/ui-engineer/UiEngineer";

function App() {
  return (
    <Router>
      <div className="flex flex-col scroll-smooth ">
        
        <Nav />

          <Routes>
            <Route path="web-dev-tuts/" element={<Home/> } />
            <Route path="web-dev-tuts/ui-engineer" element={<UiEngineer/> } />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
