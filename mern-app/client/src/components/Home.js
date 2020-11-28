import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInputActions, fetchWishesAction,handleSubmitAction, handleDelteAction } from "../actions/homeActions";

class Home extends Component {
  // state = {
  //   text: "",
  //   myWishes: [],
  // };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.props.fetchWishes();
  }

  render() {
    const list = this.props.myWishes.map((item) => {
      return (
        <li
          className="collection-item"
          key={item._id}
          onClick={() => this.props.handleDelte(item._id)}
        >
          {item.wish}
        </li>
      );
    });
    return (
      <Fragment>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <div className="row">
            <div className="input-field">
              <input
                className="validate"
                type="text"
                value={this.props.text}
                name="item"
                onChange={(e) => this.props.handleInput(e.target.value)}
              />
              <label className="active">Wish</label>
            </div>
          </div>

          <input
            type="submit"
            className="waves-effect waves-light btn"
            value="Submit"
          />
        </form>
        <div className="collection">
          <ul>{list}</ul>
        </div>
      </Fragment>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    text: state.text,
    myWishes: state.myWishes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (input) => {
      dispatch(handleInputActions(input));
    },
    fetchWishes: () => {dispatch(fetchWishesAction());
    },
    handleSubmit: (e) => {dispatch(handleSubmitAction(e));
    },
    handleDelte: (itemid) => {dispatch(handleDelteAction(itemid));
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Home);
