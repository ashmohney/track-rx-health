import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ReturnBtn(props) {
  return (
    // <span className="return-btn" {...props} role="button" tabIndex="0">
    //   {/* <Link to="/">← Your Medications</Link> */}
    // </span>
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-info"
    >
      {/* {props.children} */}
      <Link className="link" to="/users/meds/">
        ← Return to Your Medications
      </Link>
    </button>
  );
}

export default ReturnBtn;
