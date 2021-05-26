
import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";
import SignupPage from "pages/Signup.js";
import LoginPage from "pages/Login.js";
import PricingPage from "pages/Pricing.js";
import ProfilePage from "pages/Profile.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
        <Router>
          <Switch>
              <Route path="/signup"><SignupPage /></Route>
              <Route path="/login"><LoginPage /></Route>
              <Route path="/pricing"><PricingPage /></Route>
              <Route path="/profile"><ProfilePage /></Route>
              <Route path="/"><HostingCloudLandingPage /></Route>
          </Switch>
        </Router>
  );
}

export default App;