import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: "",
    };
  }

  componentDidMount() {
    const productListApiUrl =
      "http://localhost/crud_ci/index.php/reactapi/products";
    fetch(productListApiUrl)
      .then((data) => data.json())
      .then(
        (result) => {
          this.setState({
            products: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }
  render() {
    const { error, products } = this.state;
    if (error) {
      return <h1>{error.message}</h1>;
    } else {
      return (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>SKU</th>
              <th>Price($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.sku}</td>
                <td>{product.price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => {
                      this.props.editProduct(product.id);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      this.props.deleteProduct(this.product.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
  }
}
