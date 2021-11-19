import { Component } from "react";

class Form extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            
            <div className="cart">
            <h3>Cart</h3>
            <ul>
                 <li> Baseball Glove: $19.99</li>
            </ul>
            <h4>Subtotal</h4>
            <h4>Tax</h4>
            <h4>Total</h4>

            <h2>Checkout</h2>

            <form id="checkout" onSubmit={this.props.buyNow}>
            <label htmlFor="first-name">First Name</label>
            <br />
            <input type="text" id="first-name" />
            <br />
            <label htmlFor="last-name">Last Name</label>
            <br />
            <input type="text" id="last-name" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id="email" />
            <br />
            <label htmlFor="credit-card">Credit Card</label>
            <br /> 
            <input type="number" id="credit-card" />
            <br />
            <label htmlFor="zip-code">Zip Code</label>
            <br /> 
            <input type="number" id="zip-code" />
            <br />
            <button onClick={()=>alert("Purchase complete")}
             input ="submit" type="submit">
            Buy Now
            </button>
          </form>
          </div>

        )
    }    
}

export default Form
