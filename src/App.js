// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Markets from "./pages/Markets";
import About from "./pages/About";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Sblog from "./pages/Sblog";
import Customers from "./pages/Customer";
import Helpcenter from "./pages/Helpcenter";
import Homepage2 from "./pages/Homepage2";
import Homepage3 from "./pages/Homepage3";
import Homepage4 from "./pages/Homepage4";
import Roadmap from "./pages/Roadmap";
import Legaldocs from "./pages/Legaldocs";
import SignUp from "./pages/SignUp";

import {
  
  withRouter,
  
  Route,
  Switch,
} from "react-router-dom";


const App = withRouter((props) => {
  
  
  const [displayHeader, setHeader] = useState(true);
  
  useEffect(() => {
    const hideLocations = ["/sign-up"];
    setHeader(hideLocations.includes(props.location.pathname) ? false : true);
    
  }, [props.location.pathname]);

  return (

    <div>
        <ScrollToTop />
        {displayHeader?<Header/>:null}
        {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/markets" component={Markets} />
            <Route path="/about" component={About} />
            <Route path="/education" component={Education} />
            <Route path="/blog" component={Blog} />
            <Route path="/careers" component={Careers} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog-article" component={Sblog} />
            <Route path="/customers" component={Customers} />
            <Route path="/help-center" component={Helpcenter} />
            <Route path="/home2" component={Homepage2} />
            <Route path="/home3" component={Homepage3} />
            <Route path="/home4" component={Homepage4} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/legal-docs" component={Legaldocs} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          {displayHeader?<Footer/>:null}
        {/* <Footer /> */}
      
    </div>
  );
});

export default App;
