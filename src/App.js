import React from  "react";
import { Route, Routes,Router, Link , NavLink} from "react-router-dom";
import "./Components/basics/style.css";
import Todo from "./Components/basics/Todo";
   
// import Settings from "./Components/basics/Settings"
import { TodoProvider } from "./Components/basics/usecontext"; 
import Settings from "./Components/basics/Settings";
const App = () => {
  return (
    <>
    <TodoProvider>
      <nav>
        <Link to="/">Todo List</Link>
        <br />
        <Link to="/settings">Settings</Link>
      </nav>
   
    <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </TodoProvider>
    </>
  );
};

export default App;
