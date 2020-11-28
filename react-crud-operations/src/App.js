import React, { Component } from "react";
import "./App.css";
import { Container, Button } from "react-bootstrap";
import AddProduct from "./AddProduct";
import ProductList from "./ProductsList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddProduct: false,
      isEditProduct: false,
      error: null,
      responce: {},
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  createProductForm() {
    this.setState({
      isAddProduct: true,
    });
  }

  onFormSubmit(data) {
    const apiUrl = "http://localhost/crud_ci/index.php/reactapi/createProduct";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      myHeaders,
    };

    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            isAddProduct: false,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    return (
      <Container>
        <h2 style={{ textAlign: "center" }}>CRUD DEMO</h2>
        {!this.state.isAddProduct && (
          <Button onClick={() => this.createProductForm()}>Add Product</Button>
        )}
        {this.state.isAddProduct && <AddProduct />}
        {!this.state.isAddProduct && <ProductList />}
      </Container>
    );
  }
}
