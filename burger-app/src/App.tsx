// Application external imports
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { getAuth } from "firebase/auth";

// Application local imports
import logo from "./assets/images/logo.png";
import "./App.css";
import Builder from "./layout/burgerbuilder/burgerMaster";
import Login from "./controller/auth/login";
import Register from "./controller/auth/signup";
import Reset from "./controller/auth/reset";
import Account from "./layout/account/account";
import ErrorPage from "./layout/errorPage";
import { logout } from "./controller/firebase/auth";
import { builderConfig } from "./temp/Data";
import Orders from "./controller/order/orders";
import { Data } from "./controller/types";
import Order from "./controller/order/order";
import Module from "./features/actions/modal/modal";


const getAuthState = () => {
  const auth = getAuth();
  const user = auth.currentUser
  if (user) {
    return true;
  } else {
    return false
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

function updateStateOrder() {
  console.log("updateStateOrder");
  if (builderConfig.activeData !== undefined) {
    console.log("test1");
    if (!builderConfig.activeData?.buying) {
      console.log("test2");
      builderConfig.activeData.buying = true;
    } else {
      builderConfig.activeData.buying = false;
    }
  } else {
    console.log("test3");
    throw new Error("failed to get data");
  }
  console.log(builderConfig);
  return undefined;
}

function Home() {
  return (
    <div className="content">
      <Builder activeData={builderConfig.activeData} />
      {builderConfig.activeData !== undefined ? (
            builderConfig.activeData.buying ? (
              <RenderOrder activeData={builderConfig.activeData} />
            ) : (
              <div></div>
            )
          ) : null}
      <button onClick={() => updateStateOrder()}>Order</button>
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
              <NavLink to="/account/orders">Orders</NavLink>
            </li>
            <li className="navElement" onClick={logout}>
              <NavLink to="/">Logout</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return <div>Error</div>;
}
const RenderOrder = (data: Data) => {
  return (
    <Module>
      <Order activeData={data.activeData} />
    </Module>
  );
};
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
                element={<Orders orderData={builderConfig.orderData} />}
              />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </ErrorBoundary>
      <div className="temp">
        <button onClick={() => addRandomOrders(20)}>Add random orders</button>
      </div>
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
