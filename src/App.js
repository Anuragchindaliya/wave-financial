import "./App.css";

import { useState, useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import { Header, Footer, ScrollToTop } from "./components";
import {
  Home,
  Markets,
  About,
  Education,
  Blog,
  Careers,
  Contact,
  Sblog,
  Customers,
  Helpcenter,
  Homepage2,
  Homepage3,
  Homepage4,
  Roadmap,
  Legaldocs,
  SignUp,
  NotFound,
} from "./pages";

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
        <Route exact path="*" component={NotFound} />
      </Switch>
      {displayHeader ? <Footer /> : null}
    </div>
  );
});

export default App;
