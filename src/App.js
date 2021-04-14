import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './config/amplify'
import { SingIn } from './features/authentication/SignIn/SignIn';
import { SingUp } from './features/authentication/SignUp/SignUp';
// https://blog.logrocket.com/authentication-react-apps-aws-amplify-cognito/

function App() {
  // fetch('https://sawayo.s3.eu-central-1.amazonaws.com/PROD/1617282408467.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFQQH73DXIF7KKGR%2F20210408%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20210408T063612Z&X-Amz-Expires=360000&X-Amz-Signature=9bdcd4c4f50c8d2a7743d76687831dce53ec9202132795d75dda2b7ffcedd666&X-Amz-SignedHeaders=host').then(res => res.json()).then(res => console.log(res))
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
