import React, { useRef } from "react";
import "./style.css";
import { useTodo } from "./usecontext";

import { Link } from "react-router-dom";
import Todo from "./Todo";

const Settings = () => {

  const { settings, setSettings } = useTodo();
  const handleAppNameChange = (e) => {
    const newAppName = e.target.value;
    setSettings({ ...settings, appName: newAppName });
  };

  console.log("settings", settings);
  return (
    <div className="settings">
      <h1>Settings</h1>
      <label>
        Change App Name:
        <input
          type="text"
          value={settings.appName}
          onChange={handleAppNameChange}
          placeholder="Enter new app name"
        />
      </label>

      <Link to="/">Back to Todo List</Link>
    </div>
  );
};
export default Settings;
