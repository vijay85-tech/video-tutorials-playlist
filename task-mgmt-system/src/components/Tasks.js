import React, { Component, Fragment } from "react";
import { Table, Container, Button } from "react-bootstrap";
import Axios from "axios";
export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      todos: [],
      display: false,
    };
  }

  async componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    await Axios.get(apiUrl)
      .then((res) => res)
      .then((data) => {
        this.setState({
          todos: data.data,
          display: true,
        });
      });
  }
  render() {
    const { error, display, todos } = this.state;
    // console.log(this.state.todos);;

    if (error) {
      return <div>{error}</div>;
    } else if (!display) {
      return <div className="text-center">Loading...</div>;
    } else {
      return (
        <Fragment>
          <div className="text-center">
            <h1>Tasks</h1>
          </div>
          <Container fluid>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, i) => (
                  <tr key={i + 1}>
                    <td>{i + 1}</td>
                    <td>
                      {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
                    </td>
                    <td>
                      {todo.completed && <span>Completed</span>}
                      {!todo.completed && <span>Pending</span>}
                    </td>
                <td><Button size="sm" variant="info">Edit</Button>{" "}<Button size="sm" variant="danger">Delete</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Fragment>
      );
    }
  }
}
