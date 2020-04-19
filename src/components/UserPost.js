import React from "react";

function UserPost(props) {
  return (
    <div>
      <textarea
        id="userInput"
        className="form-control"
        rows="2"
        placeholder="What's up?"
        required
        style={{ resize: "none" }}
      ></textarea>
      <div className="d-flex flex-row-reverse">
        <button
          type="button"
          className="btn btn-primary btn-sm m-1"
          onClick={() => props.AddPost("You")}
        >
          POST
        </button>
      </div>
    </div>
  );
}
export default UserPost;
