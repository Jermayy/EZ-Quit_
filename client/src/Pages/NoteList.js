import React, { Component } from 'react';
import NoteHeader from '../Components/NoteHeader/NoteHeader';
import { NoteListItem } from '../Components/NoteList/NoteListItem';
import NoteListWrapper from '../Components/NoteList/NoteListWrapper';


import SavedNotes from '../utils/testNotes';
import './NoteList.css';

export class NoteList extends Component{

state = {
    SavedNotes
}


    render(){

        return(
            <div>
                <NoteHeader></NoteHeader>
               <NoteListWrapper>
                   {this.state.SavedNotes.map (note =>(
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
        )
    }
}