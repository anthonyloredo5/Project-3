import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Wrapper from "./components/Wrapper";
import Landing from './Pages/Landing';
import Dash from "./Pages/Dash";
import signUp from './components/signUp';
import Login from './components/Login';




function App() {
  return (
    <Router>
      <div>
        <Wrapper>

          <Route exact path="/" component={Landing} />
          <Route exact path="/dash" component={Dash} />

          <Route exact path="/signUp" component={signUp} />
          <Route exact path="/Login" component={Login} />

        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

