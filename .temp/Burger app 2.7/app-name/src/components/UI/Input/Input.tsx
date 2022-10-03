
import React, { ReactElement } from 'react'
import classes from './Input.module.css'


// changed turi buti arba Form change eventas arba Change eventas
export interface InputProps {
    elementType: string
    elementConfig: any
    label?:string
    value: any
    changed:any
    invalid: boolean
    shouldValidate ?: boolean
    touched ?: boolean
}

const input = (props:InputProps) => {
   let inputElement:ReactElement
   const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push (classes.Invalid)
    }

   switch (props.elementType) {
    case ('input'):
        inputElement = <input 
            className = {inputClasses.join(' ')} 
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.changed}/>;
        break;
    case ( 'textarea'):
        inputElement = <textarea 
            className = {inputClasses.join(' ')}  
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.changed}/>
        break;
    case ( 'select' ):
        inputElement = 
        <select
            className = {inputClasses.join(' ')} 
            value = {props.value}
            onChange = {props.changed}>
           
        {props.elementConfig.options.map( (option:any) => (
            <option value = {option.value}>
                {option.displayValue}
            </option>
         ))}
        </select> 
        break;
    default:
        inputElement = <input 
            className = {inputClasses.join(' ')}  
            {...props.elementConfig} 
            value = {props.value}
            onChange = {props.changed}/>
   }
    return(
        <div className = {classes.Input}>
            <label className= {classes.Label}>{props.label}</label>
            {inputElement}
        </div>
        )
}
export default input;