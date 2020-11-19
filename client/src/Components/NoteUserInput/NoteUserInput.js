import React, { useRef, useState } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./NoteUserInput.css";

import NoteAPI from '../../apis/NoteAPI'; 
import { useHistory } from 'react-router-dom';

const dayjs = require('dayjs')
export default function NoteUserInput() {

  const history = useHistory();

  const [notes, setNotes] = useState([]);

  const dateRef = useRef();
  const timeRef = useRef();
  const smokeRef = useRef();
  const bodyRef = useRef();


  const date = JSON.stringify(dayjs().format("DD/MM/YYYY"));
  const dateDisplay = date.replace(/['"]+/g, "");
  const time = JSON.stringify(dayjs().format("hh:mm A"));
  const timeDisplay = time.replace(/['"]+/g, "");

  const handleSubmit = async (event) => {
    event.preventDefault();
       
  const response = await NoteAPI.addNote({
      date: dateDisplay,
      time: timeDisplay,
      smoke: smokeRef.current.value,
      note: bodyRef.current.value
    })

    // dateRef.current.value = "";
    // timeRef.current.value = "";
    smokeRef.current.value = "";
    bodyRef.current.value = "";
    history.push("/Dashboard")
     
  }

  return (
    <div className="userInput">
      <h2 className="header"> New Note </h2>
      <div className="inputBlock">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text type="date" id="inputGroup-sizing-default">
            Date :
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref={dateRef}
          placeholder={dateDisplay}
          disabled
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Time :
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref={timeRef}
          placeholder={timeDisplay}
          disabled
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Number of smokes had today :
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref={smokeRef}
        />
      </InputGroup>

      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Leave yourself a little note...</Form.Label>
          <Form.Control as="textarea" rows={3} ref={bodyRef} />
        </Form.Group>
      </Form>

      <Button variant="warning" onClick={handleSubmit}>
        Add Note
      </Button>

      </div>
    </div>
  );
}
