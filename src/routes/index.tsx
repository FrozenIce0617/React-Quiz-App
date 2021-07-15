import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, Test } from "./../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
