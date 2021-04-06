import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './config/amplify'
import { SingIn } from './features/authentication/SignIn/SignIn';
import { SingUp } from './features/authentication/SignUp/SignUp';
// https://blog.logrocket.com/authentication-react-apps-aws-amplify-cognito/

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/signIn">SignIn</Link>
          </li>
          <li>
            <Link to="/signOut">SignOut</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/signUp">
          <SingUp />
        </Route>
        <Route path="/signIn">
          <SingIn />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
