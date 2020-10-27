import React, { useRef, useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Create_Note } from "../../utils/actions";
import API from "../../utils/API";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./NoteUserInput.css";

import {NoteAPI} from '../../apis/NoteAPI'; 



export default function NoteUserInput() {
  // const [state, dispatch] = useStoreContext();
  // const [newNoteList, setNewNoteList] = useState([]);


  const [notes, setNotes] = useState([]);


  const loadNotes = async () =>{
    const notes = await NoteAPI.getNotes()
    setNotes(notes)
    console.log(notes)
  }

  useEffect(async ()=>{
  loadNotes();

  }, [])



  const dateRef = useRef();
  const timeRef = useRef();
  const smokeRef = useRef();
  const bodyRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
       
  await NoteAPI.addNote({
      date: dateRef.current.value,
      time: timeRef.current.value,
      smoke: smokeRef.current.value,
      note: bodyRef.current.value
    })

    dateRef.current.value = "";
    timeRef.current.value = "";
    smokeRef.current.value = "";
    bodyRef.current.value = "";

    loadNotes();
    // const newNote = {
    //   date: dateRef.current.value,
    //   time: timeRef.current.value,
    //   smoke: smokeRef.current.value,
    //   body: bodyRef.current.value,
    // };

    // setNewNoteList((newNoteList) => [...newNoteList, newNote]);
    // console.log(newNoteList);

    // API.saveNote({
    //   date: dateRef.current.value,
    //   time: timeRef.current.value,
    //   smoke: smokeRef.current.value,
    //   body: bodyRef.current.value,
    // })
    //   .then((res) => {
    //     dispatch({ type: Create_Note, note: res.data });
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));

    
  }

  return (
    <div className="userInput">
      <h2 className="header"> New Note </h2>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Date :
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref={dateRef}
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
  );
}
