import React from "react";
import { useHistory } from "react-router-dom";
const Goback = () => {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return (
    <button className="waves-effect waves-light btn" onClick={handleClick}>
      back to Home
    </button>
  );
};

export default Goback;
