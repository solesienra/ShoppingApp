import React from "react";
import "./App.css";
import ShoppingLists from "./components/ShoppingLists";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ShoppingLists} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
