import React, { Component } from "react";
import DashboardHeader from "../Components/DashboardHeader/DashboardHeader";
import { DashboardProgress } from "../Components/DashboardProgress/DashboardProgress";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardHeader></DashboardHeader>
        <DashboardProgress></DashboardProgress>
      </div>
    );
  }
}
