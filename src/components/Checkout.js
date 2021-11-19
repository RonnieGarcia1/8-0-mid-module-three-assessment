import { Component } from "react";
import Cart from "./Cart";

class Checkout extends Component{
    render(){
        return(
            
            <div className="Checkout">
            <Cart />
            <h4>Subtotal</h4>
            <h4>Tax</h4>
            <h4>Total</h4>

            <h2>Checkout</h2>

            <form id="checkout" onSubmit={this.props.checkout}>
            <label htmlFor="first-name">First Name</label>
            <br />
            <input type="text" id="first-name" name="firstName" />
            <br />
            <label htmlFor="last-name">Last Name</label>
            <br />
            <input type="text" id="last-name" name="lastName" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <label htmlFor="credit-card">Credit Card</label>
            <br /> 
            <input type="number" id="credit-card" name="creditCard"/>
            <br />
            <label htmlFor="zip-code">Zip Code</label>
            <br /> 
            <input type="number" id="zip-code" name="zip" />
            <br />
            <button className ="submit" type="submit">
            Buy Now
            </button>
          </form>
          </div>

        )
    }
}

export default Checkout;
