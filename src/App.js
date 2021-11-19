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
      productsList: [],
      name: "",
      price: 0,
      subtotal: 0,
      Tax: 0,
      Total: 0,
    }
  }

  addItemToCart = (list) => {
    console.log(list)
    this.setState({
      price: this.state.price + list,
    });


  }

  firstName = (e) => {
    e.preventDefault();
    console.log("FirstName")
  }

  lastName = (e) => {
    e.preventDefault();
    console.log("LastName")
  }

  email = (e) => {
    e.preventDefault();
    console.log("Please enter a valid email")
  }

  creditCard = (e) => {
    e.preventDefault();
    console.log("Enter valid credit card")
  }

  zipCode = (e) => {
    e.preventDefault();
    console.log("enter a valid zip code")
  }
  
  buyNow = (e) => {
    e.preventDefault();
    alert("you have submitted your order");
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
      <div className="app">
      
        <h3>My Garage Sale</h3>

        { productList }
        <div id="form-section"> 
        <Form />
        </div>
    
       </div>
    )

  }

}
export default App;
