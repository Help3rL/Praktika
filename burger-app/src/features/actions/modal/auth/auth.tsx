import React from 'react';
import './auth.css'



const auth = (props:any) => {
    if(props.case === 'Login'){
        return (
            <div className='login'>
                <fieldset>
                    <h2>Login form</h2>
                    <div><label htmlFor="username">Email</label>
                    <input type="text" name="username" id="username"/></div>
                    <div><label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" /></div>
                    <button>Login</button>
                    <button onClick={() => (props.case = 'Signup')}>Sign Up</button>
                </fieldset>
            </div>
        );
    }
    if (props.case === 'Signup') {
        return(
            <div className='signup'>
                <fieldset>
                    <h2>Singup form</h2>
                    <div><label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"/></div>
                    <div><label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password"/></div>
                    <div><label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" /></div>
                    <div><label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" id="surname" /></div>
                    <div><label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" /></div>
                    <h3>Address</h3>
                    <div><label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" /></div>
                    <div><label htmlFor="zip">Zip</label>
                    <input type="number" name="zip" id="zip" /></div>
                    <div><label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" /></div>
                    <div className="button"><button type="submit">Signup</button></div>
                </fieldset>
            </div>
        )
    }
    if (props.case === "Order"){
        return (
            <div className='order'>
                <h3>Order information</h3>
                <p>Burger's base price:<span>{"4.00$"}</span></p>
                <div className="information">
                    <div className="ingredients">
                        <table>
                            <thead>
                                <tr>
                                    <th className='textToRight'>Name</th>
                                    <th>Price(per one)</th>
                                    <th>Amount</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                                <tr>
                                    <th className='textToRight'>Ingredient</th> 
                                    <td>{15.15}$</td>
                                    <td>{10}</td>
                                    <td>{151.50}$</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total">
                            <p>Total ingredients: <span className="totalIngr">{12}</span></p>
                            <p>Total ingredients cost: <span className="cost">{155.50}$</span></p>
                            <p>Delivery cost: <span className="deliveryCost">{2.00}$</span></p>
                            <p><strong>Sub Total:</strong><span className="subTotal">{3.00}$</span></p>
                    </div>
                </div>
                <div className="addressForm">
                    <h3>Delivery address</h3>
                    <div className="address">
                        <div className='input'>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" defaultValue={'UserAccCity'}/>
                        </div>
                        <div className='input'>
                            <label htmlFor="zip">Zip</label>
                            <input type="number" name="zip" id="zip" defaultValue={16564||'UserAccZip'}/>
                        </div>
                        <div className='input'>
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" defaultValue={'UserAccAddress'}/>
                        </div>
                    </div>
                </div>
                <button type="submit">Place order</button>
            </div>
        )
    }
    return (<div>Unexpected error: <a href="/contact">contant admin</a> </div>)
}
export default auth;