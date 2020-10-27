import React, { Component, useEffect, useState } from "react";
import NoteHeader from "../Components/NoteHeader/NoteHeader";
import { NoteListItem } from "../Components/NoteList/NoteListItem";
import NoteListWrapper from "../Components/NoteList/NoteListWrapper";

import SavedNotes from "../utils/testNotes";
import {NoteAPI} from '../apis/NoteAPI'; 


import "./NoteList.css";

export default function NoteList () {
  // state = {
  //   SavedNotes,
  // };

const [notes, setNotes] = useState([]);

useEffect(async ()=>{
const notes = await NoteAPI.getNotes()
setNotes(notes)
}, [])


    return (
      <div>
        <NoteHeader></NoteHeader>
        <NoteListWrapper>
          {notes.map((note) => (
            <NoteListItem
              key={note.id}
              date={note.date}
              time={note.time}
              smoke={note.smoke}
              note={note.note}
            />
          ))}
        </NoteListWrapper>
      </div>
    );
  }

