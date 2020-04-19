import React from "react";
import UserPost from "./UserPost";
import AddBtn from "./AddBtn";

function HComponent(props) {
  return (
    <div>
      <UserPost AddPost={props.AddPost} />
      <div className="d-flex flex-row">
        <AddBtn AddRandomPost={props.AddRandomPost} />
        <label className="align-self-end">New posts ...</label>
      </div>
    </div>
  );
}
export default HComponent;
