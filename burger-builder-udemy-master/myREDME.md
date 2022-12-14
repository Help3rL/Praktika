# REACT/REDUX NOTES

#### Passing params to functions when passing that function to other components

```javascript
onClick={() => this.switchNameHandler('Roy José!')}
```

#### Enabling CSS Module

webpack.config.dev.js and webpack.config.production.js

```
loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'
  },
```

---

### Pure Components

They automatically perform deep checks on componentShouldUpdate to avoid rework.
You use if you know that updates may not be required. On the other hand, you have components which might only depend on one or two props and you know whenever updates are triggered for this component I want to update it because maybe I've got a couple of pure components at top positions in this component tree which prevent the updating of any child component anyways.
You can get performance hit due to constant state/props comparisons.
Having some containers with PureComponents may be a good idea.

---

### High order components

They are not representational, but they wrap other components to add a certain functionality.
If your project uses React 16.2, you can now use a built-in "Aux" component - a so called fragment.

It's actually not called Aux but you simply use <> - an empty JSX tag.

So the following code

```javascript
<Aux>
  <h1>First Element</h1>
  <h1>Second Element</h1>
</Aux>
```

becomes

```javascript
<>
  <h1>First Element</h1>
  <h1>Second Element</h1>
</>
```

Behind the scenes, it does the same our Aux component did.

---

### Using setState if you rely on previous State.

```javascript
this.setState((prevState, props) => {
  return {
    showPersons: !doesShow,
    toggleClicked: prevState.toggleClicked + 1
  };
});
```

---

### PropTypes: [Source](https://reactjs.org/docs/typechecking-with-proptypes.html)

**ref:** can only be used in stateful components. They can be used after render (componentDidMount or componentDidUpdate)

`yarn add prop-types`

---

- State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html
- PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
- Higher Order Components: https://reactjs.org/docs/higher-order-components.html
- Refs: https://reactjs.org/docs/refs-and-the-dom.html

---

### Simulate JSON response

`https://jsonplaceholder.typicode.com/`

---

### Axios for HTTP Requests

`https://github.com/axios/axios`

---

### Removing Interceptors

var myInterceptor = axios.interceptors.request.use(function () {/_..._/});
axios.interceptors.request.eject(myInterceptor);

---

### Routing

`yarn add react-router react-router-dom`

We can use `NavLink` instead of `Link` to keep track of active links via css. **NavLink**: activeClassName.

---

### Loading components/routes lazily (on demand):

Webpack will then generate a smaller bundle.js, and then add n.chunk.js lazily.

use new HOC:

```javascript
import React, { Component } from "react";

const aysncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default aysncComponent;
```

it's used like this:

```javascript
const AsyncNewPost = asyncComponent(() => {
  // dynamic import syntax, whatever it's passed here v, it's only imported when that function is executed
  return import("./NewPost/NewPost");
});
```

---

### Ideal for causing side effects

- ComponentDidMount
- ComponentDidUpdate

---

---

## Redux

- State influences what you see on the screen
- Clear predictable process of updating state

[Redux Inmutability](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8303068?start=0)
[Redux theory](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8267738?start=0)

```js
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

We could use Redux for everything, however, if you really want to keep the state where it belongs to and avoid propagating it through all components where it is not relevant, you have to think about where it makes sense to use Redux, such as data that is shared across all data.

UI conditional rendering or form management are usually cases where Redux is not necessary.

**Middleware:** functions or code in general you hook into a process which gets executed as part of that process without stopping it.

## Applying Middleware

- Import `applyMiddleware` function from redux package

```js
import { createStore, combineReducers, applyMiddleware } from "redux";
```

- Create the middleware code, in this case, a logger:

```js
const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};
```

- Pass it in createStore function:

```js
const store = createStore(rootReducer, applyMiddleware(logger));
```

- Add Redux DevTools
  - [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en)
  - [Post-install](https://github.com/zalmoxisus/redux-devtools-extension#usage)

---

### Redux-Thunk

This is required to run async code. Instead of returning the action, a function is returned.

- `yarn add redux-thunk`
- Add it as middleware
- Actions Creators concept

```js
import thunk from "redux-thunk";
// ...
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
```

- Usage example:

```js
export const saveResult = result => {
  return {
    type: STORE_RESULT,
    result
  };
};

export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
```

### Where should we transform data before storing into state Redux store? Reducers or Action Creators?
