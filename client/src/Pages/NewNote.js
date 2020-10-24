import React, { Component } from 'react';
import NoteHeader from '../Components/NoteHeader/NoteHeader'
import NoteUserInput from '../Components/NoteUserInput/NoteUserInput';


import './NewNote.css';

export default class NewNote extends Component{

    render(){

        return(
            <div>
                <NoteHeader></NoteHeader>
                <NoteUserInput></NoteUserInput>
                




            </div>
        )
    }
}