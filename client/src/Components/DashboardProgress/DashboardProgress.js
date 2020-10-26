import React, { useRef, useState, componentDidMount } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'

import './DashboardProgress.css'
import { Link } from 'react-router-dom';


export const DashboardProgress =()=>{
  


  let [smokeLimit, setSmokeLimit] = useState(0);
  let [smokeCounter, setSmokeCounter] = useState(0);
  let [currentSmokeCount, setCurrentSmokeCount] = useState(0);
  
  let[progressBarStatus, setProgressBarStatus] = useState(100);


  // const componentDidMount = ()=>{
  //   setSmokeLimit(10);
  // }



  const setLimit = (event) =>{
      event.preventDefault();
      setSmokeLimit(smokeLimit = limitRef.current.value);
      handleClose();
      console.log(`current smoke limit : ${smokeLimit}`);
  }

  const handleIncrement = () => {
 
    setSmokeCounter(smokeCounter + 1);
    console.log(`smoke counter at :  ${smokeCounter}`)
    updateCurrentSmokeCount();
  };

const updateCurrentSmokeCount =()=>{
   const newCount = smokeLimit - smokeCounter;
    setCurrentSmokeCount(currentSmokeCount = newCount);
    console.log(`current smokes left for the day is : ${currentSmokeCount}`)
    updateProgressBar();
}

const updateProgressBar = ()=>{
   let status = currentSmokeCount / smokeLimit * 100;
   let result = status.toFixed(2)
    setProgressBarStatus(result);
}

// --------------------- Modal logic --------------

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const limitRef = useRef();


//-------------------------------

        return(
<div className="dashboard">



<div className="dashboardBody">
        <Card id="counter">
            <Card.Body id="counterNumber">
        <p>{currentSmokeCount}</p>
            </Card.Body>
        </Card>

        
</div>
<ProgressBar animated now={progressBarStatus} className="progressBar" label={`${progressBarStatus}%`} variant="danger"/>

<Button variant="outline-info" className='btnInfo' onClick={handleShow}>Edit Limit</Button>

<div>

</div>


<div className="btnSmoke">
<Button variant="danger" size="lg" block onClick={handleIncrement}>
    Smoke
  </Button>
  </div>


 <div className="addNewNoteBtn">
<Link  to="/NewNote">
<Button variant="info" size="md" block>
    Add new note
  </Button>
</Link>
</div>

{/* Box for metrics  */}

  <Card id="metricBox">
      <Card.Body>
          Metrics Box
      </Card.Body>
  </Card>

  <Button variant="warning" className='btnInfo' >Set Reminder in Calendar</Button>

{/* ----- Pop up for edit smoke limit ------- */}
  <div className='DashboardPopUp'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Daily Smoke Limit</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
         <InputGroup className="mb-3">
             <FormControl
                placeholder="Enter new daily smoke limit"
                aria-label="New daily smoke limit"
                aria-describedby="basic-addon2"
                ref={limitRef}
             />
             <InputGroup.Append>
                 <Button variant="outline-primary" onClick={setLimit}>Edit Limit</Button>
            </InputGroup.Append>
         </InputGroup>
        </Modal.Body>
        
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

</div>

        )
  
}