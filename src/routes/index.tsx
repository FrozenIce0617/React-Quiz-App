import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, Test, Result } from "./../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/result" component={Result} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
