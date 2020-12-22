import React from "react";

function Form(props) {

return (
  <form>
    <div className="form-group">
      <label htmlFor="search"></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control col-3 mx-auto"
        placeholder="Search"
        id="search"
      />
    </div>
  </form>
);
}

// function SearchForm(props) {
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="search">Search:</label>
//         <input
//           onChange={props.handleInputChange}
//           value={props.value}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search For a Movie"
//           id="search"
//         />
//         <br />
//         <button onClick={props.handleFormSubmit} className="btn btn-primary">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

export default Form;
