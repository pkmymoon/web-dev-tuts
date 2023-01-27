import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AnimatedRoutes from "./components/includes/AnimatedRoutes";
import Nav from "./components/includes/Nav";

function App() {
  return (
    <Router >
      
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
