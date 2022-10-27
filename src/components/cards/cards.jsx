import React from "react";
import PropTypes from "prop-types";

Todolist.propTypes = {};

function Todolist(props) {
  const { status, author, title} = props;
  return (
    
      <div className="todolist">
        <div className="title">
          <h6 className="titleTask">Title: {title}</h6>
          <p className="author">Creator: {author}</p>
          <span className={status}>Status: {status}</span>
        </div>
        <div className="description">
          <h6 className="descript">Description:</h6>
          <p className="descripStyle">This is task home work. This is task home work</p>
          <div className="status">
            <p className="select" value={status}>
              {status} <i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
        </div>
      </div>
    
  );
}

Cards.propTypes = {};

function Cards() {
  const data = [
    {
      title: "Task 1",
      author: "Author 1",
      status: "New",
    },
    {
      title: "Task 2",
      author: "Author 1",
      status: "New",
    },
    {
      title: "Task 3",
      author: "Author 1",
      status: "Done",
    },
    {
      title: "Task 4",
      author: "Author 1",
      status: "Doing",
    },
    {
      title: "Task 5",
      author: "Author 1",
      status: "New",
    },
    {
      title: "Task 6",
      author: "Author 1",
      status: "New",
    },
    {
      title: "Task 7",
      author: "Author 1",
      status: "Done",
    },
    {
      title: "Task 8",
      author: "Author 1",
      status: "New",
    },
    {
      title: "Task 9",
      author: "Author 1",
      status: "Doing",
    }
  ];
  return (
    <>
      {data.map((item, index) => (
        <Todolist
          key={index}
          title={item.title}
          author={item.author}
          status={item.status}
          description={item.description}
        />
      ))}
    </>
  );
}

export default Cards;
