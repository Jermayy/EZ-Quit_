import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import './DashboardProgress.css'
export class DashboardProgress extends Component{
    render(){
        return(
<div className="dashboard">



<div className="dashboardBody">
        <Card id="counter">
            <Card.Body id="counterNumber">
                <p>5</p>
            </Card.Body>
        </Card>

</div>
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