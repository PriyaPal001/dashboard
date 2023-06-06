import React from "react";
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
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
              <Route exact path="/master" component={MasterTab} >
               <SubTabs/>
                </Route>
              <Route exact path="/logout" component={''} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

function SubTabs() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
console.log(path,url)
  return (

    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>

        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}


export default App;
