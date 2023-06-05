import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MasterTab from "./components/Mastertab";
import collectFee from "./components/CollectFee";
import GenerateReceipt from "./components/Generatereceipt";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/Maincontent";

const App = () => {
  return (
    <div>
      {/* <Layout /> */}
      <Router>
        <div className="container">
          <Navbar />
          <div className="content">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route exact path="/collectfee" component={collectFee} />
              <Route
                exact
                path="/generatereceipts"
                component={GenerateReceipt}
              />
              <Route exact path="/master" component={MasterTab} />
              <Route exact path="/logout" component={''} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
