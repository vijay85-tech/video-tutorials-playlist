import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      productName: "",
      sku: "",
      price: "",
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    return (
      <Container>
        <h2>Add Product</h2>
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="productName"
                  value={this.state.productName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="sku">
                <Form.Label>SKU</Form.Label>
                <Form.Control
                  type="text"
                  name="sku"
                  value={this.state.sku}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Button type="submit" variant="success">
                  Save
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddProduct;
