import React from "react";
import logo from "./assets/images/logo.png";
import "./App.css";
import Builder from "./features/burgerbuilder/burgerMaster";
import Login from "./controller/auth/login";
import Register from "./controller/auth/signup";
import Reset from "./controller/auth/reset";
import Account from './layout/account/account'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
const builderConfig = {
  builder: {
    basePrice: 400,
    ingredients: {
      cheese: 1,
      lettuce: 1,
      patty: 1,
      tomato: 1,
    },
    price: {
      cheese: 200,
      lettuce: 250,
      patty: 150,
      tomato: 300,
    },
  },
  ingredients: [
    { name: "patty", amount: 1 },
    { name: "cheese", amount: 2 },
    { name: "lettuce", amount: 3 },
    { name: "tomato", amount: 4 },
  ],
  orderData: [
    {
      ingrName: [
        { name: "patty", amount: 1 },
        { name: "cheese", amount: 2 },
        { name: "lettuce", amount: 3 },
        { name: "tomato", amount: 4 },
      ],
      orderCost: 5000,
      paid: true,
      id: 498,
      amount: 3,
      date: new Date(),
    },
    {
      ingrName: [
        { name: "patty", amount: 1 },
        { name: "cheese", amount: 2 },
        { name: "lettuce", amount: 3 },
        { name: "tomato", amount: 4 },
      ],
      orderCost: 5000,
      paid: true,
      id: 498,
      amount: 3,
      date: new Date(),
    },
  ],
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
  return (
    <div className="content">
      <Builder config={builderConfig} />
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
          <li className="navElement">
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/account" element={<Account/>} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
