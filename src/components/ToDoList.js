import React, { Component } from "react";
import "../styles/ToDoList.css";
import logo from "../icons/to-do-list.png";

export class ToDoList extends Component {
  render() {
    return (
      <div className="ToDoList">
        <div className="ToDoListHeader">
          <img className="ToDoListLogo" src={logo} />
          <label className="ToDoListHeaderLabel">To Do List ...</label>
        </div>
        <div className="ToDoListBody"></div>
      </div>
    );
  }
}
