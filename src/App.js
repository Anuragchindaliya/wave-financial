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
import NotFound from "pages/NotFound";

import { withRouter, Route, Switch } from "react-router-dom";

const App = withRouter((props) => {
  const [displayHeader, setHeader] = useState(true);

  useEffect(() => {
    const hideLocations = ["/sign-up"];
    setHeader(hideLocations.includes(props.location.pathname) ? false : true);
  }, [props.location.pathname]);

  return (
    <div>
      <ScrollToTop />
      {displayHeader ? <Header /> : null}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/markets" component={Markets} />
        <Route exact path="/about" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog-article" component={Sblog} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/help-center" component={Helpcenter} />
        <Route exact path="/home2" component={Homepage2} />
        <Route exact path="/home3" component={Homepage3} />
        <Route exact path="/home4" component={Homepage4} />
        <Route exact path="/roadmap" component={Roadmap} />
        <Route exact path="/legal-docs" component={Legaldocs} />
        <Route exact path="/sign-up" component={SignUp} />
        {/* show Homepage */}
        <Route exact path="*" component={NotFound} />
      </Switch>
      {displayHeader ? <Footer /> : null}
    </div>
  );
});

export default App;
