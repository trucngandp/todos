import React from "react";
import PropTypes from "prop-types";

NewTaskBtn.propTypes = {};

function NewTaskBtn() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <button type="button" className="newTask">
          Create New Task
        </button>
        <form class="form-inline">
         
          <input
            class=""
            type="search"
            placeholder="Type something to search"
          />
           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NewTaskBtn;
