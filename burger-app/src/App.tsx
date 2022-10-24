// Application external imports
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
  
} from "react-router-dom";

// Application local imports
import logo from "./assets/images/logo.png";
import "./App.css";
import Builder from "./layout/burgerbuilder/burgerMaster";
import Login from "./controller/auth/login";
import Register from "./controller/auth/signup";
import Reset from "./controller/auth/reset";
import Account, { AccountNav } from "./layout/account/account";
import ErrorPage from "./layout/errorPage";
import { ActiveData } from "./controller/hooks/main";
import { logout } from "./controller/firebase/auth";
import { builderConfig } from "./temp/Data";
import { Data, UserState } from "./controller/types";
import Orders from "./controller/order/orders";

const getAuthState = () => {
    return true
  }

class ErrorBoundary extends React.Component {
  state;
  props;
  constructor(props: any) {
    super(props);
    this.props = props;
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: object) {
    return (
      <div>
        {error}
        {errorInfo}
      </div>
    );
  }
  //Renders Fallback
  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h1>Something went wrong.</h1>
          <p>Contact Administration via: gotohell@purgatory.eu</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const NoMatch = () => {
  return(
          <div className="NothingFound">
        <h1>Link not existing.</h1>
        <p>Check link and if you believe this is unintended</p>
        <p>Contact administration via purgatory.com</p>
      </div>
  )

}

function Home() {
  console.info(ActiveData());
  return (
    <div className="content">
      <Builder activeData={builderConfig.activeData} />
    </div>
  );
}
function Toolbar(userData:UserState) {
  if (getAuthState() === false){
    return(
      <header>
      <nav className="Toolbar">
        <div className="Logo">
          <NavLink to="/">
            <img className="logoImage" src={logo} alt="BurgerBuilder" />
          </NavLink>
        </div>
        <ul>
          <li className="navElement">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navElement">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
  } else if (getAuthState() === true) {
    return (
      <header>
      <nav className="Toolbar">
        <div className="Logo">
          <NavLink to="/">
            <img className="logoImage" src={logo} alt="BurgerBuilder" />
          </NavLink>
        </div>
        <ul>
          <li className="navElement">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navElement">
            <NavLink to="/account/profile">Account</NavLink>
          </li>
          <li className="navElement">
            <NavLink to='/account/orders'>Orders</NavLink>
          </li>
          <li className="navElement" onClick={logout}>
            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
  } 
  return (
    <div>Error</div>
  )
}
function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Toolbar userLogState={true} userName={""} userSurname={""} userAddress={""} userEmail={""} userOrders={[]} userToken={""} userlogoutTime={0} uid={""} />
          <Routes>
            <Route
              index
              path="/"
              element={<Home />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/login"
              element={<Login />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/register"
              element={<Register />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/reset"
              element={<Reset />}
              errorElement={<ErrorPage />}
            />
            
            <Route
              path="/account"
              element={ getAuthState() ? <Account /> : <Navigate to='/login'/>}
              errorElement={<ErrorPage />}
            >
              <Route path="/account/profile" element="" />
              <Route path="/account/friends" element="" />
              <Route path="/account/settings" element="" />
              <Route
                path="/account/orders"
                element={<Orders orderData={builderConfig.orderData} />}
              />
            </Route>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
