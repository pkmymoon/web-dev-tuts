import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/includes/Nav";
import Html from "./components/screens/topics/Html";
import Css from "./components/screens/topics/Css";
import JavaScript from "./components/screens/topics/JavaScript";
import Home from "./components/screens/Home";

function App() {
  return (
    <div className="flex scroll-smooth">
      <Router>
        <Nav />
        <div className="flex-1 bg-bg_light dark:bg-bg_dark h-full transition-all ease-out duration-300">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="html">
                <Route path=":title" element={<Html />} />
              </Route>
              <Route path="css">
                <Route path=":title" element={<Css />} />
              </Route>
              <Route path="javascript">
                <Route path=":title" element={<JavaScript />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
