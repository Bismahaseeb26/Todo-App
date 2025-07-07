

import React, { useEffect, useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputData, setinputData] = useState("");//define 
  const [items, setItems] = useState([]);
  const [IsEditItem, setIsEditItem] = useState("");
  const [toggleSubmit, settoggleSubmit] = useState(false);
  //get local storage
  useEffect(() => {
    getlocalstorage();
  }, []);
  const Additems = () => {
    if (!inputData) {
      alert("fill the data");
    } else if (inputData && toggleSubmit) {
      setItems(
        items.map((curEle) => {
          if (curEle.id === IsEditItem) {
            return { ...curEle, name: inputData };
          }
          return curEle;
        })
      );
      setinputData("");
      setIsEditItem("");
      settoggleSubmit(false);
    } else {
      const newinputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, newinputData]);
      setinputData("");
    }
  };
  //delete the item
  const deleteItem = (index) => {
    const updatedItems = items.filter((curEle) => {
      return curEle.id !== index;
    });
    setItems(updatedItems);
  };

  //remove all items
  const removeAll = () => {
    setItems([]);
  };
  //add local storage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  //GET local storage
  const getlocalstorage = () => {
    const localData = localStorage.getItem("mytodolist");
    if (localData) {
      setItems(JSON.parse(localData));
    }
  };
  //edit item
  const editItem = (index) => {
    const item_todo = items.find((curEle) => {
      return curEle.id === index;
    });
    setinputData(item_todo.name);
    setIsEditItem(index);
    settoggleSubmit(true);
  };

  return (
    <>
      <div className="main-container"></div>
      <div className="todo-container">
        <figure>
          <img src="./images/todo.jpg" alt="Todo App"></img>
          <figcaption>Add List Here</figcaption>
        </figure>
        <div className="todo-input">
          <input
            type="text"
            placeholder="✍️ Add Items"
            className="form-control"
            value={inputData}// state variable (dyanamic)
            onChange={(Event) => setinputData(Event.target.value)}
          />
          {toggleSubmit ? (
            <i className=" fa fa-solid fa-edit add-btn" onClick={Additems}></i>
          ) : (
            <i className=" fa fa-solid fa-plus add-btn" onClick={Additems}></i>
          )}
        </div>
        <div className="todo-items">
          {items.map((curEle, index) => {
            return (
              <div className="item" key={curEle.id}>
                <h5>{curEle.name}</h5>
                <div className="todo-btn">
                  <i
                    className=" fa fa-solid fa-edit add-btn"
                    onClick={() => editItem(curEle.id)}
                  ></i>
                  <i
                    className=" fa fa-solid fa-trash add-btn"
                    onClick={() => deleteItem(curEle.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="todo-list">
          <button
            className="btn effect04"
            data-sm-link-text="CLEAR ALL"
            onClick={removeAll}
          >
            <span>CHECK LIST</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
