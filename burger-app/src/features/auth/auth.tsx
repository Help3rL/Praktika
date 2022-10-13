import React from 'react';
import countryList from 'react-select-country-list';
import Select from 'react-select'
// import { connect } from 'react-redux';

// function mapStateToProps(state:any) {
//     return {

//     };
// }

// function mapDispatchToProps(dispatch:any) {
//     return {

//     };
// }

const auth = (props:any) => {
    if(props.case === 'Login'){
        return (
            <div className='login'>
                <fieldset>
                    <h2>Login form</h2>
                    <label htmlFor="username">Email</label>
                    <input type="text" name="username" id="username"/><br/>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" /><br/>
                    <button>Login</button>
                    <button>Sign Up</button>
                </fieldset>
            </div>
        );
    }
    if (props.case === 'Singup') {
        const options = countryList().getData();
        let value;
        const changeHandler = (values:any) =>{
            value = values
        }
        return(
            <div className='signup'>
                <fieldset>
                    <h2>Singup form</h2>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"/><br/>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password"/>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" id="surname" />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" />
                    <h3>Address</h3>
                    <Select
                        placeholder={"Select country"}
                        options={options}
                        value={value}
                        onChange={changeHandler}
                    />
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" />
                    <label htmlFor="zip">Zip</label>
                    <input type="number" name="zip" id="zip" />
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" />
                </fieldset>
            </div>
        )
    }
    return (<div>error</div>)
}
export default auth;