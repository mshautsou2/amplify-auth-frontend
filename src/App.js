import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { configure } from '@api/configure';
import './config/amplify'
import { SingIn } from './features/authentication/SignIn/SignIn';
import { SingUp } from './features/authentication/SignUp/SignUp';
import { BrainTreeCardPayment } from './features/payments/BrainTreeCardPayment';
import { BrainTreePaypalPayment } from './features/payments/BrainTreePaypalPayment';
import { BrainTreeVenmoPayment } from './features/payments/BrainTreeVenmoPayment';
import { BACKEND_URL } from './config/env';
import { CartScreen } from './features/cart/CartScreen/CartScreen';
import { fetchAdapter } from '@api/adapters/fetch.adapter';
// https://blog.logrocket.com/authentication-react-apps-aws-amplify-cognito/

configure({
  backendUrl: BACKEND_URL,
  fetcher: fetchAdapter(fetch),//replace with axios
  tokenExtractor: () => localStorage.getItem('token')
})

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
          <li>
            <Link to="/payments/braintree/credit_cards">Braintree CreditCard</Link>
          </li>
          <li>
            <Link to="/payments/braintree/venmo">Braintree Venmo</Link>
          </li>
          <li>
            <Link to="/payments/braintree/paypal">Braintree Paypal</Link>
          </li>
          <li>
            <Link to="/cart/">Cart</Link>
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
        <Route path="/payments/braintree/credit_cards">
          <BrainTreeCardPayment />
        </Route>
        <Route path="/payments/braintree/venmo">
          <BrainTreeVenmoPayment />
        </Route>
        <Route path="/payments/braintree/paypal">
          <BrainTreePaypalPayment />
        </Route>
        <Route path="/cart/">
          <CartScreen />
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
