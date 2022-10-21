import React from "react";
import logo from "./assets/images/logo.png";
import "./App.css";
import Builder from "./layout/burgerbuilder/burgerMaster";
import Login from "./controller/auth/login";
import Register from "./controller/auth/signup";
import Reset from "./controller/auth/reset";
import Account from './layout/account/account'
import ErrorPage from "./layout/errorPage";
import {ActiveData} from './controller/hooks/main'
import { logout } from './controller/firebase/auth'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import {Data} from './controller/types'
const builderConfig:Data = {
  activeData: {
    loading: true,
    ingr: {

    },
    totalPrice: 0,
    error: false,
    building: true,
    buying: false
  },
  userData: {
      userName: '',
      userSurname: '',
      userAddress: '',
      userZip: 0,
      userEmail: '',
      userOrders: [
        {ingrName:{
        patty: [ "patty", 150 ,1 ],
        cheese: [ "cheese", 200 ,2 ],
        lettuce: [ "lettuce", 300,3 ],
        tomato: [ "tomato", 400 ,4 ]
        },
        orderCost: 0,
        paid: true,
        id: 0,
        amount: 1,
        date: new Date()
      },
      {
        ingrName: {
          patty: [ "patty", 150 ,1 ],
          cheese: [ "cheese", 200 ,2 ],
          lettuce: [ "lettuce", 300,3 ],
          tomato: [ "tomato", 400 ,4 ]
        },
        orderCost: 5000,
        paid: true,
        id: 498,
        amount: 3,
        date: new Date(),
      }
      ],
      userCity: '',
      userToken: '',
      userPhoneNumber: 0,
      userlogoutTime: 0,
      userLogState: "neverseen",
      uid: ''
    },
};

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

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
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

function Home() {
  console.info(ActiveData())
  return (
    <div className="content">
      <Builder activeData={builderConfig.activeData} />
    </div>
  );
}
function Toolbar() {
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
            <NavLink to="/account">Account</NavLink>
          </li>
          <li className="navElement">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="navElement" onClick={logout}>
            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} errorElement={<ErrorPage/>}/>
            <Route path="/login" element={<Login />} errorElement={<ErrorPage/>}/>
            <Route path="/register" element={<Register />} errorElement={<ErrorPage/>}/>
            <Route path="/reset" element={<Reset />} errorElement={<ErrorPage/>}/>
            <Route path="/account" element={<Account/>} errorElement={<ErrorPage/>}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
