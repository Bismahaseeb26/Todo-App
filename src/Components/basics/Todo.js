import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useTodo } from "./usecontext";
import ListItem from "./listItem";

const Todo = () => {
  //useContext

  // how to create a react component custom
  // how to pass data/props to the custom component
  // how to use the react component

  const { settings } = useTodo();
  const [inputData, setinputData] = useState(""); //define
  const [items, setItems] = useState([]);
  const [IsEditItem, setIsEditItem] = useState("");
  const [toggleSubmit, settoggleSubmit] = useState(false);

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
        id: items.length,
        name: inputData,
      };
      setItems([...items, newinputData]);
      setinputData("");
    }
  };
  //delete the item
  const deleteItem = (index) => {
    console.log("deleted");
    const updatedItems = items.filter((curEle) => {
      return curEle.id !== index;
    });

    console.log("deleted items:", updatedItems);
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
      <div>App Name: {settings.appName}</div>
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
            value={inputData} // state variable (dyanamic)
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
              <ListItem
                key={curEle.id}
                name={curEle.name}
                onEdit={() => {
                  editItem(index);
                }}
                onDelete={() => {
                  deleteItem(index);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="todo-footer">
        <button className="btn" onClick={removeAll}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default Todo;
