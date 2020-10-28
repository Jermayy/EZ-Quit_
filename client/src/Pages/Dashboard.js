import React, { Component } from "react";
import DashboardHeader from "../Components/DashboardHeader/DashboardHeader";
import { DashboardProgress } from "../Components/DashboardProgress/DashboardProgress";
import './Dashboard.css'
export default class Dashboard extends Component {
  render() {
    return (
      <div className="page">
        <DashboardHeader></DashboardHeader>
        <DashboardProgress></DashboardProgress>
      </div>
    );
  }
}
