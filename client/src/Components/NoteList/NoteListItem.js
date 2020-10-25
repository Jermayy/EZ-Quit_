import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./NoteListItem.css";

export const NoteListItem = ({ date, time, smoke, note }) => {
  return (
    <Card border="secondary" style={{ width: "18rem" }} className="noteCard">
      <Card.Body>
        <Card.Title className="noteInfo">
          <div>
            <div>Date : {date}</div>
            <div>Time : {time}</div>
            <div>No. of Smokes had : {smoke}</div>
          </div>
          <div className="noteButton">
            <Button variant="danger" size="sm" id="button">
              Delete
            </Button>
          </div>
        </Card.Title>

        <Card.Text>{note}</Card.Text>
      </Card.Body>
    </Card>
  );
};
