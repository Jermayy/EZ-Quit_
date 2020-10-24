import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './NoteListItem.css';


export const NoteListItem =({date, time, smoke, note})=>{

    
        return(

            <Card border="secondary" style={{ width: '18rem' }}
            className="noteCard"
            >
             <Card.Body>
              <Card.Title> 
                  {date} 
                  {time}
                  {smoke}
              </Card.Title>
              
              <Card.Text>
               {note}
              </Card.Text>
            
            </Card.Body>
          </Card>


        )
    
}