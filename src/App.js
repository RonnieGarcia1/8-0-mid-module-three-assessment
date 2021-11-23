import { Component } from "react";
import "./App.css";
import Checkout from "./components/Checkout"
import data from "./data/productData";
import formatPrice from "./helpers/formatPrice";

class App extends Component{
  constructor(){
    super();
    this.state = {
      cart: [],
      subtotal: 0,
      Tax: 0,
      Total: 0,
    }
  }

  addItemToCart = (products) => {
    let { price } = products; 
    console.log(price)
    this.setState({
      cart: [ ...this.state.cart, products],
      subtotal: this.state.subtotal + price,
    })
  }

  render(){

    let productList = data.map((list)=>{
      let { id, name, price, description, img } = list;
    
    return(
        <div key={ id } className="products">
          <div className="each-product">
            <h4>{ name }</h4>
            <p>Price: { formatPrice(price) }</p>
            <button onClick={()=>this.addItemToCart(list)}>Add To Cart</button>
            <img src={img} alt="garage sale images" />
            <p>{ description }</p>
          </div>
        </div>
      )
    });

    let cartElArr = this.state.cart.map((product)=>{
      let {name, price} = product; 
      return <li> { name }: ${ price }</li>      
    })

    return(
    
    <div className="app" id="app-wrapper">
        
        <div className="product-wrapper">
        <h2>My Garage Sale</h2>

        { productList }
        </div>
        <div>
          <h3>Cart</h3>
          <ul>
              { cartElArr }
          </ul>
          <h4>Subtotal: { formatPrice(this.state.subtotal) }</h4>
          <h4>Tax: { formatPrice(this.state.subtotal*.05) }</h4>
          <h4>Total: { formatPrice(this.state.subtotal*1.05) }</h4>

        <div className="cart" id="cart-forms"> 
          <Checkout />
        </div>
        </div>

        
    
    </div>
    )

  }

};
export default App;
