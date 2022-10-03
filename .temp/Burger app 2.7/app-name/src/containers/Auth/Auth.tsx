import React from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
import { AxiosError } from 'axios'
import { Redirect } from 'react-router-dom'
import { updateObject, checkValidity } from '../../shared/utility'
import { useEffect, useState } from 'react'




export interface ElementConfigAuthInterface {
    type: string
    placeholder: string
}

export interface ValidationAuthInterface {
    required ?: boolean
    isEmail ?: boolean
    minLength ?: number
    touched ?: boolean
    maxLength ?: number
}

export interface AuthControlsParamInterface {
    elementType : string
    elementConfig : ElementConfigAuthInterface
    value: string
    validation: ValidationAuthInterface
    valid: boolean
    touched : boolean
}

export interface AuthControlsInterface {
    [key:string] : AuthControlsParamInterface 
}

export interface AuthStateInterface {
    controls : AuthControlsInterface
  
}

export interface AuthPropsInterface {
    onAuth (email: string, password: string, isSignup:boolean) : any
    loading: boolean
    error: AxiosError
    isAuthenticated : boolean | null
    buildingBurger : boolean
    authRedirectPath: string
    onSetAuthRedirectPath (path ?: string) : void
}



const Auth = (props:AuthPropsInterface) => {
    const [authForm, setAuthForm] = useState<AuthControlsInterface> ({
        email:{
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: true,
            touched:true
        },
        password:{
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched:false
        },  
     })
        const [isSignup, setIsSignup] = useState (true);
        const {buildingBurger, authRedirectPath, onSetAuthRedirectPath} = props
    
    useEffect (() => {
        if (!buildingBurger && authRedirectPath !== '/'){
            onSetAuthRedirectPath ();
        }
    }, [])
   

   
//controlName yra visi elementai control objekte
     const inputChangedHandler = (event:React.FormEvent<HTMLFormElement>, controlName:string):void => {
        let controlsArgument = {...authForm[controlName]}
        const updatedControls = updateObject(authForm, {
            
            [controlName]: updateObject(controlsArgument, {
                value : (event.target as HTMLTextAreaElement).value,
                valid: checkValidity( (event.target as HTMLTextAreaElement).value, authForm[controlName].validation ),
                touched: true
            })
        })
        setAuthForm(updatedControls)
    }

     const submitHandler = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        props.onAuth (authForm.email.value, authForm.password.value, isSignup)
    }

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup)
    }

 
        const formElementsArray = [];
        for (let key in authForm){
            formElementsArray.push ({
                id:key,
                config: authForm[key]
            })
        }
        let form:JSX.Element[] | any = formElementsArray.map (formElement => (
            <Input
                key={formElement.id}
                elementType = {formElement.config.elementType}
                elementConfig = {formElement.config.elementConfig}
                value = {formElement.config.value}
                invalid = {!formElement.config.valid}
                shouldValidate = {formElement.config.validation.required}
                touched = {formElement.config.touched}
                changed = { (event:React.FormEvent<HTMLFormElement>) => inputChangedHandler(event, formElement.id)}
               
            />
        ))
        if (props.loading) {
            form = <Spinner />
        }
        let errorMessage;
        if (props.error) {
            errorMessage = (
                <p>{props.error.message}</p>
            )
        }

        let authRedirect = null
        if (props.isAuthenticated) {
            authRedirect = <Redirect to = {props.authRedirectPath} />
        }

        return (
            <div className = {classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit = {submitHandler}>
                {form}
                <Button btnType = "Success">SUBMIT</Button>
                </form>
                <Button 
                    clicked = {switchAuthModeHandler}
                    btnType = "Danger">SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
            </div>
        );
    }

// abu reduceriai turi skirtingus state interfeisus todel, kol kas any
const mapStateToProps = (state:any) => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error,
        isAuthenticated : state.authReducer.token !== null,
        buildingBurger : state.burgerBuilderReducer.building,
        authRedirectPath : state.authReducer.authRedirectPath
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onAuth: (email:string, password:string, isSignup:boolean) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath : () => dispatch (actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Auth);