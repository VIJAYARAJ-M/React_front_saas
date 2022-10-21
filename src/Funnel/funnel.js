import React, { Component } from "react";
import ReactDOM from "react-dom";
import FunnelGraph from "funnel-graph-js";

import "../cssfiles/main.css";
import "../cssfiles/theme.css";
import "../cssfiles/styles.css";


const data = {
    labels: ['Cv Sent', '1st  Interview', '2nd Interview', '3rd Interview','Offer'],
    subLabels: ['Cv Sent' ,'1st  Interview', '2nd Interview', '3rd Interview','Offer'],
            colors: [
              ['#FFB178', '#FF78B1', '#FF3C8E'],
                ['#FFB178', '#FF78B1', '#FF3C8E'],
                ['#A0BBFF', '#EC77FF'],
                ['#A0F9FF', '#7795FF'],
                ['#FFB178', '#FF78B1', '#FF3C8E'],
            ],
            values: [
                [12000, 5700, 360],
                [3300, 1400, 1000],
                [2000, 1000, 800],
                [600, 200, 130],
                [330, 140, 100],
            ],
  };
  

  class FeaturedInfo extends Component {
    componentDidMount() {
      const graph = new FunnelGraph({
        container: ".Funnel",
        gradientDirection: "vertical",
        // maintainAspectRatio : "false",
        data: data,
        displayPercent: true,
        direction: "horizontal",
        width: 500,
        height: 150,
        // subLabelValue: "percent"
        
      });
  
      graph.draw();
    }
    render() {
    return (
       
        <><div className="App">
            <div className="Funnel" />
        </div></>
      
    
    );
    }
  }
 export default FeaturedInfo;