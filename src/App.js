import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import data from "./data/productData";
import formatPrice from "./helpers/formatPrice";

class App extends Component{
  constructor(){
    super();
    this.state = {
      products: data,
      name: "",
      price: "",
      subtotal: 0,
      Tax: 0,
      Total: 0,
    }
  }

  addItemToCart = (e) => {
    e.preventDefault();
    this.setState({


    })


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
    console.log("you have submitted your order")
  }


  render(){

    let productList = this.state.products.map((list)=>{
      let { id, name, price, description, img } = list;
      console.log(id);
      console.log(name);
      console.log(price);
      console.log(img);
      console.log(description);
      return(
        <div className="products">
          <div>
            <h4>{ name }</h4>
            <p>Price: { formatPrice(price) }</p>
            <button onClick={()=>this.addItemToCart()}>Add To Cart</button>
            <img src={img} alt="garage sale images" />
            <p>{ description }</p>
          </div>
          <br />
          <div></div>

          

        </div>
      )
    });


    return(
      <div className="app">
      <body>
        <h3>My Garage Sale</h3>

        { productList }
        <div id="form-section"> 
        <Form />
        </div>
       </body>
       </div>
    )

  }

}
export default App;
