import React from "react";


function Form(props) {

  return (
    // className="form-control col-2 mx-auto"
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2"
        onChange={props.handleInputChange}
        value={props.Term}
        name="searchTerm"
        type="text"
        placeholder="Search"
        id="search"
        />
    </form>
  );
}

export default Form;
