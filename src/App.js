
import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";
import SignupPage from "pages/Signup.js";
import PricingPage from "pages/Pricing.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
        <Router>
          <Switch>
              <Route path="/signup"><SignupPage /></Route>
              <Route path="/pricing"><PricingPage /></Route>
              <Route path="/"><HostingCloudLandingPage /></Route>
          </Switch>
        </Router>
  );
}

export default App;