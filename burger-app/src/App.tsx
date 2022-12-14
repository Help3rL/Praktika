// Application external imports
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

// Application local imports
import logo from "./assets/images/logo.png";
import "./App.css";
import Builder from "./layout/burgerbuilder/burgerMaster";
import Login from "./controller/auth/login";
import Register from "./controller/auth/signup";
import Reset from "./controller/auth/reset";
import Account from "./layout/account/account";
import ErrorPage from "./layout/errorPage";
import { builderConfig } from "./temp/Data";
import Orders from "./controller/order/orders";
import { app } from "./controller/firebase/firebase_config";
// React hooks for basic local routing

///

const getAuthState = () => {
  if (localStorage.getItem("userData") === null) {
    console.log('1st ' + localStorage.getItem('userData'))
    return false
  } else {
    const user = getAuth(app).currentUser;
    console.log(user);
    if (user === null) {
      localStorage.setItem("userData", JSON.stringify(user));
      return false
    } else {
      return true
    }
  }
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
  return (
    <div className="NothingFound">
      <Toolbar />
      <h1>Link not existing.</h1>
      <p>Check link and if you believe this is unintended</p>
      <p>Contact administration via purgatory.com</p>
    </div>
  );
};

function Home() {
  const [Ingr, setIngr] = useState(builderConfig.activeData.ingr);
  useEffect(() => {}, [Ingr]);

  return (
    <div className="content">
      <Builder
        ingr={Ingr}
        setIngrData={setIngr}
        userData={
          builderConfig.userData !== undefined
            ? builderConfig.userData
            : {
                userName: "",
                uid: "",
                userAddress: "",
                userEmail: "",
                userlogoutTime: 0,
                userOrders: [],
                userSurname: "",
              }
        }
        activedata={
          builderConfig.activeData !== undefined
            ? builderConfig.activeData
            : {
                loading: true,
                ingr: {},
                totalPrice: 0,
                error: false,
                building: true,
                buying: false,
                DeliveryCost: 0,
                basecost: 400,
              }
        }
      />
    </div>
  );
}

function Toolbar() {
  if (getAuthState() === false) {
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
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  if (getAuthState() === true) {
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
              <NavLink to="/account/orders">Orders</NavLink>
            </li>
            <li className="navElement" onClick={() => {signOut(getAuth(app)); localStorage.removeItem('userData')}}>
              <NavLink to="/">Logout</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return <div></div>;
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Toolbar />
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
              element={getAuthState() ? <Account /> : <Navigate to="/login" />}
              errorElement={<ErrorPage />}
            >
              <Route path="/account/profile" element="" />
              <Route path="/account/friends" element="" />
              <Route path="/account/settings" element="" />
              <Route
                path="/account/orders"
                element={<Orders activeData={builderConfig.activeData} />}
              />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </ErrorBoundary>
      {/* <div className="temp">
        <button onClick={() => addRandomOrders(20)}>Add random orders</button>
      </div> */}
    </div>
  );
}

export default App;

function addRandomOrders(arg0: number) {
  function randomDate(
    start: Date,
    end: Date,
    startHour: number,
    endHour: number
  ) {
    var date = new Date(+start + Math.random() * (Number(end) - Number(start)));
    var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    date.setHours(hour);
    return date;
  }
  let temphold = [];
  for (let i = 0; i < arg0; i++) {
    const randomNumber = (Math.random() * 100).toFixed(0);
    temphold.push({
      ingrName: {
        patty: ["patty", 150, randomNumber + 1],
        cheese: ["cheese", 200, randomNumber + 2],
        lettuce: ["lettuce", 300, randomNumber + 3],
        tomato: ["tomato", 400, randomNumber + 4],
      },
      orderCost: Number(randomNumber + 8 * 375) * 15,
      paid: true,
      id: randomNumber + randomNumber,
      amount: 15,
      date: randomDate(new Date(), new Date(2011, 1, 25), 5, 15),
    });
  }
  return undefined;
}
