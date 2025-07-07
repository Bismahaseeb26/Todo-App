import React from "react";
import { createContext, useContext, useState } from "react";

// Create a Context for the Todo List
const TodoContext = createContext();

// Create a custom hook to use the TodoContext
export const useTodo = () => {
  return useContext(TodoContext);
};

// provider component
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [settings, setSettings] = useState({
      appName: "Todo List",
    });
    return (
        <TodoContext.Provider value={{ todos, setTodos, settings, setSettings }}>
            {children}
        </TodoContext.Provider>
    );
}
export default TodoProvider;