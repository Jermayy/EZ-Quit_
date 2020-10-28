import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import axios from 'axios';

import "./NoteListItem.css";

export const NoteListItem = ({date, time, smoke, note, Button }) => {


// async function deleteNote(){
// await axios.delete(`/api/notes/${_id}`);

// // window.location.reload();
// }



  return (
    <Card border="secondary" style={{ width: "18rem" }} className="noteCard">
      <Card.Body>
        <Card.Title className="noteInfo">
          <div className="content">
            <div>Date : {date}</div>
            <div>Time : {time}</div>
            <div>No. of Smokes had : {smoke}</div>
          </div>
          <div className="noteButton">
            {/* <Button variant="danger" size="sm" id="button" onClick={deleteNote}>
              Delete
            </Button> */}


          <Button />

          </div>
        </Card.Title>

        <Card.Text className="body">{note}</Card.Text>
      </Card.Body>
    </Card>
  );
};
