import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/includes/Nav";
import Home from "./components/screens/Home";
import ProffessionView from "./components/screens/ProffessionView";

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row">
        <div>
        <Nav />
        </div>
          <Routes>
            <Route path="web-dev-tuts/" element={<Home/> } />
            <Route path="web-dev-tuts/:link" element={<ProffessionView/> } />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
