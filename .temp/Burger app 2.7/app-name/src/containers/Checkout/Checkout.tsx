
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { IngredientsType } from '../BurgerBuilder/BurgerBuilder';
import { RouteComponentProps } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'





export interface CheckoutProps extends RouteComponentProps {
    ings: IngredientsType 
    onInitPurchase () : any
    purchased:boolean
}
 
const Checkout = (props:CheckoutProps) => {
    
    const checkoutCancelledHandler = () => {
        props.history.goBack();
        console.log(props.history)
    }

    const checkoutContinuedHandler = () => {
        props.history.replace ('/checkout/contact-data')
    }


        let summary = <Redirect to = '/'/>    
        if (props.ings){
            const  purchasedRedirect = props.purchased ? <Redirect to = '/' exact/> : null
            summary = (
                <div>
                    {purchasedRedirect}
                     <CheckoutSummary 
                        ingredients={props.ings}
                        checkoutCancelled = {checkoutCancelledHandler}
                        checkoutContinued = {checkoutContinuedHandler}/>
                    <Route 
                        path = {props.match.path + '/contact-data'} 
                        component = {ContactData}
                    />
                </div>
            )
        }
        return summary;
    }

const mapStateToProps = (state:any) => {
    return {
        ings: state.burgerBuilderReducer.ingredients,
        purchased: state.orderReducer.purchased
    }
}


export default connect(mapStateToProps)(Checkout);