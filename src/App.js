import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/includes/AnimatedRoutes";
import Nav from "./components/includes/Nav";
import ScrollToTop from "./components/includes/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col lg:flex-row">
        <div>
        <Nav />
        </div>
        <div className="w-full"> 
          
          <AnimatedRoutes/>
        </div>
      </div>
    </Router>
  );
}

export default App;
