import React from "react";

function Card(props) {
  let d = new Date();
  return (
    <li className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{d.toDateString()}</h6>
        <p className="card-text">{props.txt}</p>
        <div className="row">
          <button
            type="button"
            className={
              props.liked
                ? "btn btn-sm btn-danger m-2"
                : "btn btn-sm btn-primary m-2"
            }
            onClick={() => props.addLike(props.id, props.liked)}
          >
            {props.liked ? "UNLIKE" : "LIKE"}
          </button>
          <h6 className="align-self-center">{props.likes + props.liked}</h6>
        </div>
      </div>
    </li>
  );
}
export default Card;
