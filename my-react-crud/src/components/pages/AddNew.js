import React from "react";
const AddNew = () => {

//  function handleChange(e){
//   console.log(e.target)
// }

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="input-field col s6">
          <input id="email" type="text" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <a class="waves-effect waves-light btn">Register</a>
      </form>
    </div>
  );
};

export default AddNew;
