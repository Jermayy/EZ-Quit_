import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';


import './DashboardProgress.css'
export class DashboardProgress extends Component{
  
  state = {
    smokeLimit: "",
    smokeCounter: "",
    currentSmokeCount: ""
  }
  


    render(){
        return(
<div className="dashboard">



<div className="dashboardBody">
        <Card id="counter">
            <Card.Body id="counterNumber">
                <p>4</p>
            </Card.Body>
        </Card>

        
</div>
<ProgressBar animated now={80} className="progressBar" label={`80%`} variant="danger"/>

<Button variant="outline-info" className='btnInfo'>Edit Limit</Button>
<div className="btnSmoke">
<Button variant="danger" size="lg" block >
    Smoke
  </Button>
  </div>

  <Card id="metricBox">
      <Card.Body>
          Metrics Box
      </Card.Body>
  </Card>
</div>
        )
    }
}