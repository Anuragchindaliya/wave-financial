// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Markets from "./pages/Markets";
import About from "./pages/About";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/markets" component={Markets}/>
            <Route  path="/about" component={About}/>
            <Route  path="/education" component={Education}/>
            <Route  path="/blog" component={Blog}/>
            <Route  path="/careers" component={Careers}/>
            <Route  path="/contact" component={Contact}/>
            {/* <Route exact path="/" component={Home}/>
            <Route exact path="/" component={Home}/> */}
            
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
