import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/includes/Nav";
import Home from "./components/screens/Home";
import UiEngineer from "./components/screens/ui-engineer/UiEngineer";
import BackendDeveloper from "./components/screens/backend-developer/BackendDeveloper";
import DevOps from "./components/screens/devops-engineer/DevOps";

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row">
        <div>

        <Nav />
        </div>

          <Routes>
            <Route path="web-dev-tuts/" element={<Home/> } />
            <Route path="web-dev-tuts/ui-engineer" element={<UiEngineer/> } />
            <Route path="web-dev-tuts/backend-developer" element={<BackendDeveloper /> } />
            <Route path="web-dev-tuts/devops-engineer" element={<DevOps /> } />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
