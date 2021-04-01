import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import Biolanded from "./components/Bio/Biolanded";
import Education from "./components/Education/Education";
import Foundation from "./components/Foundation/Foundation";
import Awards from "./components/Awards/Awards";
import PastedOffice from "./components/PastedOffice/PastedOffice";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Bio" exact component={Bio} />
          <Route exact path="/Biolanded" component={Biolanded} />
          <Route path="/Education" exact component={Education} />
          <Route path="/Foundation" exact component={Foundation} />
          <Route path="/Awards" exact component={Awards} />
          <Route path="/PastedOffice" exact component={PastedOffice} />


        </Switch>
      </Router>

    </>
  );
}

export default App;
