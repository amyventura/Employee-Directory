import React from "react";

function Form(props) {

  return (
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        />
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
