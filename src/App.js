import { Component } from "react";
import "./App.css";
import Checkout from "./components/Checkout"
import data from "./data/productData";
import formatPrice from "./helpers/formatPrice";

class App extends Component{
  constructor(){
    super();
    this.state = {
      productsArr: data,
      cart: [],
      price: "",
      productName:"",
      subtotal: 0,
      Tax: 0,
      Total: 0,
    }
  }

  addItemToCart = (e) => {
    e.preventDefault();
  }

  render(){

    let productList = this.state.productsArr.map((list)=>{
      let { name, price, description, img } = list;
    
    return(
        <div className="products">
          <div className="each-product">
            <h4>{ name }</h4>
            <p>Price: { formatPrice(price) }</p>
            <button onClick={()=>this.addItemToCart()}>Add To Cart</button>
            <img src={img} alt="garage sale images" />
            <p>{ description }</p>
          </div>
        </div>
      )
    });

    return(
    
    <div className="app" id="app-wrapper">
        
        <div className="product-wrapper">
        <h2>My Garage Sale</h2>

        { productList }
        </div>

        <div className="cart" id="cart-forms"> 
        <Checkout />
        </div>
    
    </div>
    )

  }

};
export default App;
