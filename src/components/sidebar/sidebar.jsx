import React from "react";
import PropTypes from "prop-types";

SideBar.propTypes = {};

function SideBar() {
  return (
    <div className="sideBar">
      <ul>
        <li>All Task</li>
        <li>New Task</li>
        <li>Doing Task</li>
        <li>Done Task</li>
      </ul>
      <div></div>
    </div>
  );
}

export default SideBar;
