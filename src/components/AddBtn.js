import React from "react";

function AddBtn(props) {
  return (
    <button
      type="button"
      className="btn btn-sm btn-primary m-2"
      onClick={() => props.AddRandomPost()}
    >
      +
    </button>
  );
}
export default AddBtn;
