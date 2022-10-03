import React, { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import { IngredientsType } from '../../BurgerBuilder/BurgerBuilder';
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI//Spinner/Spinner'
import { RouteComponentProps } from 'react-router-dom';
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index'
import { updateObject, checkValidity } from '../../../shared/utility'

export interface Options {
    [key:string] : string | boolean
}
export interface ValidationRules {
    required ?: boolean
    minLength ?: number
    maxLength ?: number
    touched ?: boolean
}
export interface ElementConfig {
    type?:string
    placeholder?:string 
    options?: Options[]
}

export interface OrderFormDetail{
    elementType: string
    elementConfig: ElementConfig
    value: string
    validation: ValidationRules
    valid:boolean
}

export interface OrderForm {
    [key:string] : OrderFormDetail 
}


export interface TotalPrice {
    totalPrice: number
}

export interface ContactDataProps extends TotalPrice, RouteComponentProps{
    ings: IngredientsType
    loading: boolean
    token:string
    onOrderBurger (orderData:any, token:string) : void
    userId : number
}

export interface ContactDataState extends TotalPrice {
    orderForm: OrderForm
    totalPrice: number

    // ingredients: IngredientsType
}

const ContactData = (props:ContactDataProps) => { 
    const[orderForm, setOrderForm] = useState<OrderForm>({
        name:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true,
                touched:true
            },
            valid: true,
        },
        street:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Street'
            },
            value: '',
            validation: {
                required: true,
                touched:false
            },
            valid: false,
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP CODE'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
                touched:false
            },
            valid: false,
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true,
                touched:false
            },
            valid: false,
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Email'
            },
            value: '',
            validation: {
                required: true,
                touched:false
            },
            valid: false,
        },
        deilveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                {value:'fastest', displayValue: 'Fastest'},
                {value:'cheapest', displayValue: 'Cheapest'},
                ]
            },
            value: 'fastest',
            valid: true,
            validation: {
                // required: true,
                // touched: false
            }, 
        }, 
            
    },
            
    )
            const [formIsValid, setFormIsValid] = useState(false)
            
    
       
    
    //Options interfeisas naudojamas dviem vietom,
    //FormDatoj tesiog nurodomas object rakto tipui paduoti


    const orderHandler = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        const formData:any = {}
        for (let formElementIdentifier in orderForm){
            formData[formElementIdentifier] = orderForm[formElementIdentifier as keyof typeof orderForm].value
        }
        const order = {
            ingredients: props.ings,
            price: props.totalPrice,
            orderData: formData,
            userId: props.userId


        //     customer: {
        //     name: 'Max',
        //     address: {
        //         street: "Teststreet 1",
        //         zipCode: '41351',
        //         country: 'Germany'
        //     },
        //     email: 'test@test.com'
        //     },
        // deilveryMethod: 'fastest'
            }
            props.onOrderBurger(order, props.token)
        }
    

    const inputChangedHandler = (event:React.FormEvent<HTMLFormElement>, inputIdentifier:string):void => {
        const updatedFormElement = updateObject(orderForm[inputIdentifier], {
            value: (event.target as HTMLTextAreaElement).value,
            valid: checkValidity((event.target as HTMLTextAreaElement).value, orderForm[inputIdentifier].validation),
            touched: true})
        
        const updatedOrderForm = updateObject (orderForm , {
            [inputIdentifier] : updatedFormElement
        })
        
        updatedOrderForm[inputIdentifier] = updatedFormElement

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }
        setOrderForm (updatedOrderForm)
        setFormIsValid(formIsValid)
    }
   
 

        const formElementsArray = [];
        for (let key in orderForm){
            formElementsArray.push ({
                id:key,
                config: orderForm[key]
            })
        }
        let form = (
            <form onSubmit = {orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        invalid = {!formElement.config.valid}
                        shouldValidate = {formElement.config.validation.required}
                        touched = {formElement.config.validation.touched}
                        changed = { (event:React.FormEvent<HTMLFormElement>) => inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button btnType = "Success" disabled = {!formIsValid} onClick={() => console.log("paspaustas order")} >ORDER</Button>
            </form>
        );
        if(props.loading){
            form = <Spinner/>
        }
        return (
            <div className = {classes.ContactData} >
                <h4> Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
// paziureti koks turi buti state type 
const mapStateToProps = (state:any) => {
    return {
        ings: state.burgerBuilderReducer.ingredients,
        totalPrice: state.burgerBuilderReducer.totalPrice,
        loading: state.orderReducer.loading,
        token: state.authReducer.token,
        userId: state.authReducer.userId
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onOrderBurger: (orderData:any, token:string) => dispatch(actions.purchaseBurger(orderData, token))
}
    }

export default connect (mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));