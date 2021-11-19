import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import data from "./data/productData";
import formatPrice from "./helpers/formatPrice";

class App extends Component{
  constructor(){
    super();
    this.state = {
      productsArr: data,
      cart: [],
      price: 0,
      subtotal: 0,
      Tax: 0,
      Total: 0,
    }
  }

  addItemToCart = (e) => {
    this.setState({
      cart: [ ...this.state.cart, { name: e.target.name, price: e.target.value },],
    });

  }

  render(){

    let productList = this.state.productsArr.map((list)=>{
      let { name, price, description, img } = list;
    
      return(
        <div className="products">
          <div>
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

        <div className="forms" id="form-section"> 
        <Form />
        </div>
    
       </div>
    )

  }

}
export default App;
