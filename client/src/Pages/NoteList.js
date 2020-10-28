import React, { Component, useEffect, useState } from "react";
import NoteHeader from "../Components/NoteHeader/NoteHeader";
import { NoteListItem } from "../Components/NoteList/NoteListItem";
import NoteListWrapper from "../Components/NoteList/NoteListWrapper";
import Button from "react-bootstrap/Button";

import NoteAPI from "../apis/NoteAPI";
import axios from "axios";

import "./NoteList.css";

export default function NoteList() {
  // state = {
  //   SavedNotes,
  // };

  const [notes, setNotes] = useState([]);

  useEffect(async () => {
    // const res = await NoteAPI.getNotes()
    // console.log(res.data);
    // setNotes(res.data)
    renderNotes();
  }, []);

  async function renderNotes() {
    const res = await NoteAPI.getNotes();
    console.log(res.data);
    setNotes(res.data);
  }

  async function deleteNote(id) {
    await NoteAPI.deleteNote(id);
    renderNotes();
    // window.location.reload();
  }

  return (
    <div className="page">
      <NoteHeader></NoteHeader>
      <NoteListWrapper>
        {notes.map((note) => (
          <NoteListItem
            _id={note._id}
            key={note._id}
            date={note.date}
            time={note.time}
            smoke={note.smokes}
            note={note.note}
            Button={() => (
              <Button
                variant="danger"
                size="sm"
                id="button"
                onClick={deleteNote}
              >
                Delete
              </Button>
            )}
          />
        ))}
      </NoteListWrapper>
    </div>
  );
}
