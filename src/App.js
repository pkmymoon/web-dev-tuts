import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/includes/Nav";
import Home from "./components/screens/Home";

function App() {
  return (
    <div className="flex scroll-smooth">
      <Router>
        <Nav/>
        <div className="flex-1 bg-bg_light dark:bg-bg_dark h-full transition-all ease-out duration-300 ">
          <Routes>
            <Route path="/" element={<Home/> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
