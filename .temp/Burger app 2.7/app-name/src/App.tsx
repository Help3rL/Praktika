import React, {useEffect, Suspense} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'
import Logout from './containers/Auth/Logout/Logout'
import { connect  } from 'react-redux'
import * as actions from './store/actions/index'




// Nuo react-router-dom 6 versijos nebereikia naudoti exact keyword norint nurodyti route.
// 6 versijoj component keiciami i element
// 6 versijoj Switch nebenaudojimas, naudojamas Routes, kuris privalo wrapinti <Route> komponentus
export interface AppProps {
  onTryAutoSignup () : void
  isAuthenticated : boolean | null
}


const Checkout = React.lazy(() => {
  return import ('./containers/Checkout/Checkout')
})

const Orders = React.lazy(() => {
  return import ('./containers/Orders/Orders')
})

const Auth = React.lazy(() => {
  return import ('./containers/Auth/Auth')
})

// Jeigu use effect naudoja empty array [], tada funkcija suveiks tik tada kai komponentas mountinsis
// Tai pat, kaip ir su componentDidMount funkcija
const App = (props: AppProps) => {
  const { onTryAutoSignup } = props


  useEffect (() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);


    let routes = (
      <Switch>
         <Route path = "/auth" render={(props) => <Auth{...props}/>} />
         <Route path = "/"  exact component={BurgerBuilder} />
         <Redirect to = '/'/>
      </Switch>
       
       
    )
      if (props.isAuthenticated) {
        routes = (
          <Switch>
            <Route path = "/checkout" render={(props) => <Checkout{...props}/>} />
            <Route path = "/orders"  render={(props) => <Orders{...props}/>} />
            <Route path = "/logout"   component={Logout} />
            <Route path = "/auth"  render={(props) => <Auth{...props}/>} />
            <Route path = "/"  exact component={BurgerBuilder} />
            <Redirect to = '/'/>
          </Switch>
        )
      }

    return (
      <div>
        <Layout>
          <Suspense fallback = {<p>Loading...</p>}> {routes} </Suspense>
            
        </Layout>
      </div>
    );
  }
  


const mapStateToProps = (state:any) => {
  return {
    isAuthenticated : state.authReducer.token !== null
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(App));
