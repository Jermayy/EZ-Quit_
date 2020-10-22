import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './NoteUserInput.css'

export default class NoteUserInput extends Component {
    render(){

        return(
    <div className="userInput">

            <h2 className="header"> New Note </h2>


        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                 <InputGroup.Text id="inputGroup-sizing-default">Date :</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
                />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                 <InputGroup.Text id="inputGroup-sizing-default">Time :</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
                />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                 <InputGroup.Text id="inputGroup-sizing-default">Number of smokes had today :</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
                />
        </InputGroup>

<Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Leave yourself a little note...</Form.Label>
    <Form.Control as="textarea" rows={4} />
  </Form.Group>
</Form>

<Button variant="warning">Add Note</Button>



    </div>
        )
    }
}