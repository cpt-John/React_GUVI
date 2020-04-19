import React, { useState } from "react";
import "./App.css";
import VLine from "./components/Vline";
import HComponent from "./components/HeadComponent";
import $ from "jquery";
import Card from "./components/Card";

let id = 0;
function App() {
  const [List, setList] = useState([]);

  let AddPost = function (name = "", txt = "") {
    let likes = 0;
    if (name === "You") {
      txt = $("#userInput").val();
      $("#userInput").val("");
      if (!txt) return;
    } else {
      likes = Math.floor(Math.random() * 200);
    }
    setList((oldList) => {
      const tempList = [
        { id: id, name: name, txt: txt, likes: likes, liked: false },
        ...oldList,
      ];
      return tempList;
    });
    id++;
    $("#posts").animate({ scrollTop: 0 }, "slow");
    $("#posts li").css({ display: "none" });
    $("#posts li").fadeIn("slow");
  };

  let addLike = function (id, liked) {
    setList((oldList) => {
      const newList = [...oldList];
      oldList.forEach((e, i) => {
        if (e.id === id) {
          newList[i].liked = !liked;
        }
      });
      return newList;
    });
  };

  let AddRandomPost = function () {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://api.quotable.io/random", true);
    xhr.onload = function () {
      if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        AddPost(obj["author"], obj["content"]);
      }
    };
    xhr.send();
  };

  return (
    <div className="App bg bg-dark d-flex flex-column">
      <h1 className="align-self-center">Random Posts</h1>
      <div className="row flex-fill d-flex justify-content-around">
        <button
          type="button"
          className="btn btn-sm btn-primary m-2 align-self-start"
          onClick={() => {
            $("#posts").animate({ scrollTop: 0 }, "slow");
          }}
        >
          Reload
        </button>
        <VLine />
        <div>
          <HComponent AddPost={AddPost} AddRandomPost={AddRandomPost} />
          <ul id="posts">
            {List.map((e) => (
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                txt={e.txt}
                likes={e.likes}
                liked={e.liked}
                addLike={addLike}
              ></Card>
            ))}
          </ul>
        </div>
        <VLine />
        <h3 className="btn btn-sm btn-primary m-2 align-self-start">
          Settings
        </h3>
      </div>
    </div>
  );
}

export default App;
