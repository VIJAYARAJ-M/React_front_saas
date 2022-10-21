/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
//import {  Bar } from "react-chartjs-2";
import {FcPicture} from "react-icons/fc"
import "./Card.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
} from "reactstrap";

// core components

import Header from "components/Headers/Header.js";
import { NavDropdown } from "react-bootstrap";
//import {ReactDateTime} from "react-datetime"
//import 'bootstrap-daterangepicker/daterangepicker.css';
//import {  Bar, BarChart, CartesianGrid,Line,  LineChart,ResponsiveContainer,Tooltip,XAxis, YAxis } from "recharts";
import "./inter.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import FeaturedInfo from "Funnel/funnel";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

//import {HiDuplicate} from "react-icons/hi"
import { ProgressCircular, ProgressLinear } from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css'
//import Tables from "./examples/Tables";

import {BsFillPersonFill,BsStack,BsPersonLinesFill} from "react-icons/bs"
//import {FaChartBar,FaChartPie} from "react-icons/fa"
//import GaugeChart from "react-advanced-gauge-chart/dist/GaugeChart";
import ReactApexChart from "react-apexcharts";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Select from "react-select"
//import { colourOptions } from "../../src/views/data.ts";
//import { addDays } from 'date-fns';

//import { DateRangePicker } from "react-date-range";




const data =[
  {
  
      span:"bi-person-fill ",
      h5:"CV Sent",
      h4:"1"
  
  },
  {
  
    span:"bi-person-fill ",
    h5:"1st Interview",
    h4:"2"

},
{
  
  span:"bi-person-fill ",
  h5:"2nd Interview",
  h4:"3"

},
{
  
  span:"bi-person-fill ",
  h5:"3rd Interview",
  h4:"4"

},
{
  
  span:" BsFillPersonFill",
  h5:"offers",
  h4:"5"

},
{
  
  span:"bi-person-fill ",
  h5:"offers",
  h4:"1"

},
]
const renderCard = (card, index) => {
  return (
    <Col  className="" >
                      <Card className="" style={{backgroundImage:"linear-gradient(to right, #FFFBFF ,#D4D9DD )",
                      height:"200px",width:"200px",borderRadius:"50%",border:"  solid #D9D9D9",
                      /*borderImage:" linear-gradient(to right, #bd1d58, #40db19)10",*/
                      boxShadow:"8px 8px 10px 0px rgb( 120 120 120/ 80%), -8px -8px 10px 3px rgb(249 250 252/ 100%)"}}>
                          <Row className="p-4">
                              <Col>
                              <Card  style={{backgroundImage:"linear-gradient(to right,#D4D9DD, #FFFBFF  )",height:"150px",width:"150px",borderRadius:"50%",
                              border:"solid #D1D2D3"}}>
                                  <Row className="p-3">
                                      <Col>
                                     <Card className="text-center" key={index} style={{backgroundColor:"#EDEEF0",border:"solid #F2CE3E",
                                      height:"120px",width:"120px",borderRadius:"50%",marginLeft:"-4px",marginTop:"-4px"}}>
                                          <CardBody className="  ">
                                              <Row className="justify-content-center d-flex align-items-center"> 
                                                 <span><BsFillPersonFill size="2rem"/></span>
                                              </Row>
                                               <Row className="justify-content-center d-flex align-items-center">
                                               <h5>{card.h5}</h5>
                                               </Row>
                                              <Row className="justify-content-center d-flex align-items-center">
                                                <h4>{card.h4}</h4>
                                              </Row>
                                              
                                          </CardBody>
                                      </Card>
                                      </Col>
                                  </Row>
                              </Card>
                              </Col>

                          </Row>
                      </Card>
    </Col>
  );
};

const data02=[{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400,
},
{
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210,
},
{
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290,
},
{
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000,
},
{
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181,
},
{
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500,
},
{
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100,
}]

 const series= [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 12.0, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}]

 const options= {
  chart: {
    height: 300,
    type: 'bar',
    toolbar: {
      show: !1
  }
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },

    labels: {
      show: true,
     
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Monthly Custom Calculation',
   
    // position: 'top',
    floating: true,
    offsetY: -5,
    align: 'center',
    style: {
      color: '#444'
    }
  }
 }
 
 
          
  const series1 = [{
    name: 'Deal Amount',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Deal Count',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }]

  const options1= {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: !1
    }
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Monthly Custom Calculation'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['Jan', ' Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nav', 'Dec'],
    xaxis: {
      type: 'month'
    },
    yaxis: [{
      title: {
        text: 'Deal Amount',
      },
    
    }, {
      opposite: true,
      title: {
        text: 'Deal Count'
      }
    }]
  }





const data20 = [
  {
    uv: 4000,
  },
  {
    uv: 3000,
  },
  {
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
];

const series2 = [{
  name: "Deal Count",
  data: [10, 41, 35, 51, 49, 62, 69, 91, 98, 100, 108, 150]
}]
const options2 = {
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: !1
    },
    zoom: {
      enabled: false
    }
  },
  
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Monthly Custom Calculations',
    align: 'center'
  },
  dataLabels: {
    enabled: false,
    /*formatter: function (val) {
      return val + "%";
    },*/
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function(value) {
              return  value + "%";
      }
    },           
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },

    labels: {
      show: true,
     
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nev','Dec'],
  }
}
const series3 = [100, 70, 50, 30, 10]
const options3 = {
  chart: {
    width: 380,
    type: 'pie',
  },
  //colors: ['#D6CFC7', '#BEBDB8', '#999DA0', '#877F7D','#808080'],
  labels: ['CV Sent', '1st Interview', '2nd Interview', '3rd Interview', 'Offers'],
 
  legend: {
    //show:true,
    position: 'bottom',
    
    //horizontalAlign: 'center',
  },
  dataLabels: {
    enabled: true,
     style: {
      fontSize: '15px',
      colors: ['#000']
  }
    },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      
    }
  }]
}
const select = [
  { value: 'CV Sent', label: 'CV Sent' },
  { value: '1st Interview', label: '1st Interview' },
  { value: '2nd Interview', label: '2nd Interview' },
  { value: '3rd Interview', label: '3rd Interview' },
  
]
const select2 = [
  
  { value: '1st Interview', label: '1st Interview' },
  { value: '2nd Interview', label: '2nd Interview' },
  { value: '3rd Interview', label: '3rd Interview' },
  { value: 'Offers', label: 'Offers' },
 
]
 const colourOptions = [
  { value: 'CV Sent', label: 'CV Sent', color: '#00B8D9', isFixed: true },
  { value: '1st Interview', label: '1st Interview', color: '#00B8D9',  },
  { value: '2nd Interview', label: '2nd Interview', color: '#00B8D9',  },
  { value: '3rd Interview', label: '3rd Interview', color: '#00B8D9',  },
  { value: 'Offers', label: 'Offers', color: '#00B8D9', isFixed: true },
  { value: 'All', label: 'All', color: '#00B8D9', isFixed: true },
];
const month = [
  
  { value: 'Jan', label: 'Jan' },
  { value: 'Feb', label: 'Feb' },
  { value: 'Mar', label: 'Mar' },
  { value: 'Apr', label: 'Apr' },
  { value: 'May', label: 'May' },
  { value: 'Jun', label: 'Jun' },
  { value: 'Jul', label: 'Jul' },
  { value: 'Aug', label: 'Aug' },
  { value: 'Sep', label: 'Sep' },
  { value: 'Oct', label: 'Oct' },
  { value: 'Nev', label: 'Nev' },
  { value: 'Dec', label: 'Dec' },
 
] 
const year = [
  {value:"2021", label:'2021'},
  {value:"2022", label:'2022'}
]

const table = [{
  candidate:"vijay",
  stage :"1st interview",
  dealdate: 12-10-2022,
  numberofdays:13
},
{
  candidate:"jacob",
  stage :"2nd interview",
  dealdate: 12-13-2022,
  numberofdays:12
}
]

const Index = (props) => {
  // const [activeNav, setActiveNav] = useState(1);
  // const [chartExample1Data, setChartExample1Data] = useState("data1");

  
  

  /*if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };*/

 const [getdata, setdata] = useState ([]);
 console.log(getdata)
 const [getdealdetails, setdealdetails] = useState ([]);
 console.log(getdealdetails)
 //const  userObj = JSON.parse(get);
 
 //this.setState({Metadata:{[name]: value}});
 

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/deal/',{
      method:"GET",
    })
    .then(Res=>Res.json())
    .then(response=>{
      const obj = JSON.stringify(response)
      const output = JSON.parse(obj)
      
      setdata(output)
      console.log(output)
      
    });
   
  },[])
  
  
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/dealdetails/',{
      method:"GET",
    })
    .then(Res=>Res.json())
    .then(response=>{
      const obj1 = JSON.stringify(response)
      const output1 = JSON.parse(obj1)
      
      setdealdetails(output1)
      //console.log(output1)
      
    });
   
  },[])

  return (
    <>
        
        
       {/* <Header />   */}
    
      {/* Page content */}
      <Container className="pb-8 pt-5 pt-md-8" fluid style={{backgroundColor:"#ededed"}}>
       
        <Row className="justify-content-center">
            <h2>Interview Pipeline</h2>
        </Row>
        <Row className="mt-2">
          <Col xl={6} className="">
          <Card className="p-4" >

                <Row>
                    <Col>
                      <Card className="p-3" >
                        <Row>
                          
                          <Col className="justify-content-start d-flex">
                              <Select className="css-1s2u09g-control" options={year} placeholder="Year"/>
                            
                              <div style={{marginLeft:"15px"}}>
                              <Select className="css-1s2u09g-control" options={month} placeholder="Month"/>
                              </div>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Card className="p-4" >
                      <Row>
                        <Col>
                        <h3>Deal Stages</h3>
                        </Col>
                      </Row>
                      <Row>
                      {Object.keys(getdata).map((key, index)=>(
                      <Col key={index} >
                          
                                    <Card className="align-items-center" >
                                      
                                      <Row>
                                      <h6 className="" >
                                         {key}
                                      </h6>
                                      </Row>
                                  
                                        
                                      <Row>
                                              
                                      <h5>{getdata[key]}</h5>
                                      </Row>
                                          
                                  
                                    </Card>
                                  
                                </Col>
                                ))}
                      </Row>
                    </Card>
                  </Col>
                </Row>
                  
                  <Row className="mt-4">
                    <Col className="mb-5 mb-xl-0" xl="12" >
                      <Card className=" " 
                      style={{/*boxShadow:"8px 8px 7px 0px rgb( 120 120 120/ 80%), -5px -6px 5px 0 rgb(255 255 255 / 90%)"*/
                      backgroundColor:"#e0e0e0 ",height:"290px",boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff",
                      /*backgroundImage:"linear-gradient(to right, #ffd89b , #19547b )"*/}}>
                        
                        <CardBody>
                          {/* Chart */}
                          <div className="chart">
                            <FeaturedInfo/>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  </Row>
                  
                
                  <Row className="mt-4"> 
                    <Col className="p-3"> 
                      <Card className="p-3  " 
                      style={{height:"80px",backgroundColor:"#e0e0e0",
                    boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"}}>
                        <ul class="breadcrumb">
                          <li><h2>3%</h2></li>
                        </ul>
                      </Card>
                    </Col>
                  </Row>
            </Card>
          </Col>
          <Col xl={6} className="">
            <Card className=" p-4  " >
            
          <Row className="">
            <Col xl={3}>
                    <Card className="justify-content-center d-flex align-items-center p-5 "  
                    style={{backgroundColor:"#e0e0e0", height:"160px",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                }}>
                      
                        <Row className="justify-content-center d-flex align-items-center ">
                          <Col>
                          <Card style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                              <DateRangePickerComponent/>
                          </Card>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col >
                          <Card className="text-center justify-content-center align-items-center"
                          style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:"80px"}}>
                              
                                
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>Deal Value</h5>
                                </Row>
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>30000</h5>
                                </Row>
                            
                          </Card>
                          </Col>
                        </Row>

                      
                    </Card>
              </Col>

              <Col xl={3}>
                    <Card className="justify-content-center d-flex align-items-center "  
                    style={{backgroundColor:"#e0e0e0", height:"160px",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                }}>
                      
                        <Row className="justify-content-center d-flex align-items-center ">
                          <Col>
                          <Card style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                              <DateRangePickerComponent/>
                          </Card>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col >
                          <Card className="text-center justify-content-center align-items-center"
                          style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:"80px"}}>
                              
                                
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>Deal Closed</h5>
                                </Row>
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>25</h5>
                                </Row>
                            
                          </Card>
                          </Col>
                        </Row>

                      
                    </Card>
              </Col>
              <Col xl={3}>

                    <Card className="justify-content-center d-flex align-items-center "  
                    style={{backgroundColor:"#e0e0e0", height:"160px",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                }}>
                      
                        <Row className="justify-content-center d-flex align-items-center ">
                          <Col>
                          <Card style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                              <DateRangePickerComponent/>
                          </Card>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col >
                          {Object.keys(getdealdetails).map((item, index)=>(
                          <Card key={index} className="text-center justify-content-center align-items-center"
                          style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:"80px"}}>
                              
                                
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>Deal Count</h5>
                                </Row>
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>{getdealdetails['dealcount']}</h5>
                                </Row>
                            
                          </Card>
                          ))}
                          </Col>
                        </Row>

                      
                    </Card>
              </Col>

              <Col xl={3}>
                    <Card className="justify-content-center d-flex align-items-center "  
                    style={{backgroundColor:"#e0e0e0", height:"160px",
                  boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                }}>
                      
                        <Row className="justify-content-center d-flex align-items-center ">
                          <Col>
                          <Card style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px"}}>
                              <DateRangePickerComponent/>
                          </Card>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col >
                          <Card className="text-center justify-content-center align-items-center"
                          style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:"100px",height:""}}>
                              
                                
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>Avg days <br/>
                                    to close deal</h5>
                                </Row>
                                <Row className="justify-content-center d-flex align-items-center">
                                  <h5>10</h5>
                                </Row>
                            
                          </Card>
                          </Col>
                        </Row>

                      
                    </Card>
              </Col>
              
              
            </Row>
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="12" style={{}}>
                <Card className="" style={{boxShadow:"",backgroundColor:"#e0e0e0",height:"480px",
                boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
                /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
                  <CardHeader className="border-0" style={{backgroundColor:"#e0e0e0"}}>
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Tables</h3>
                      </div>
                    
                    </Row>
                    <Row className="mt-2">
                    <div className="col-5">
                        <Card style={{backgroundColor:"#e0e0e0",
                          boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:""}}>
                      <DateRangePickerComponent/>
                      </Card>
                      </div>
                    </Row>
                    <Row className="mt-3">
                    <div className="" style={{marginLeft:"15px"}}>
                      <Select
                          //defaultValue={[colourOptions[2], colourOptions[3]]}
                          isMulti
                          //name="colors"
                          options={colourOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          placeholder="Deal Stages"
                        />
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center  table-flush" responsive>
                    <thead className="">
                      <tr className="">
                        <th scope="col">Candidate</th>
                        <th scope="col">Stage</th>
                        <th scope="col">Deal Date</th>
                        <th scope="col">No of Days</th>
                        <th scope="col">Flag</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Vijay</th>
                        <td>1<sup>st</sup>Interview</td>
                        <td>12-08-2022</td>
                        <td>2</td>
                        <td>
                          <i className="fas fa-circle text-success mr-3" /> 
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Gayathri</th>
                        <td>2<sup>nd</sup>Interview</td>
                        <td>21-02-2022</td>
                        <td>4</td>
                        <td>
                          <i className="fas fa-circle text-warning mr-3" />{" "}
                        
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Sudhakar</th>
                        <td>3<sup>rd</sup>Interview</td>
                        <td>01-12-2022</td>
                        <td>6</td>
                        <td>
                          <i className="fas fa-circle text-danger mr-3" />{" "}
                        
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Simi</th>
                        <td>1<sup>st</sup>Interview</td>
                        <td>09-01-2022</td>
                        <td>2</td>
                        <td>
                          <i className="fas fa-circle text-success mr-3" /> 
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Dhinesh</th>
                        <td>1<sup>st</sup>Interview</td>
                        <td>25-06-2022</td>
                        <td>2</td>
                        <td>
                          <i className="fas fa-circle text-success mr-3" />{" "}
                          
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
            
            </Row>
          
            </Card>
          </Col>
        </Row>
       
        
        <Card className="mt-4 p-4" >
            <Row className="">
              <h3>Select Activities For Custom Ratio Calculations</h3>
            </Row>
            <Row className="mt-3">
              <Col>
              
                 <Row>
                      <Col xl="4 ">
                      <Card className="" >
                        <ReactApexChart options={options3} series={series3} type="pie" width={330} /> 
                      </Card>
                      </Col>
                      <Col xl="8">
                        <Card className=" " >
                            <Row className="p-3">
                            <Col xl="" className="justify-content-center align-items-center d-flex">
                            
                            
                                <Row className=" ">
                                  <Col xl="8" className="">
                                  
                                        <Row className="">
                                          <div>
                                        <Select className="css-1s2u09g-control" options={select} placeholder="Deal stage" />
                                          </div> 
                                        </Row>

                                        <Row className="mt-3">
                                          <div>
                                            <Select className="css-1s2u09g-control" options={select2} placeholder="Deal stage"   />
                                          </div>
                                        </Row>
                                  
                                  </Col>
                                  <Col xl="4" className="" >
                                    <ProgressCircular elevated value={20} size={100} width={13} color='var(--primary)' label="20%"/>
                                  </Col>
                                  
                                </Row>
                          
                        
                        
                            
                            </Col>
                            <Col className="" xl="">
                                
                                
                                {/* <ReactApexChart className="barchart" options={options} series={series} type="bar" height={350}  /> */}
                                {/* <ReactApexChart options={options1} series={series1} type="line" height={350} /> */}
                                <ReactApexChart options={options2} series={series2} type="line" height={200} />
        
                          </Col>
                            </Row>
                        </Card>
                      </Col>
                      
                 </Row>
         
            </Col>
            </Row>
            
        </Card>
        
           
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12" style={{}}>
            <Card className="" style={{boxShadow:"",backgroundColor:"#e0e0e0",height:"",
            boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"
            /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
              <CardHeader className="border-0" style={{backgroundColor:"#e0e0e0"}}>
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Tables</h3>
                  </div>
                 
                </Row>
                <Row className="mt-2">
                <div className="col-5">
                    <Card style={{backgroundColor:"#e0e0e0",
                      boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",width:""}}>
                   <DateRangePickerComponent/>
                   </Card>
                  </div>
                </Row>
                <Row className="mt-3">
                <div className="" style={{marginLeft:"15px"}}>
                  <Select
                      //defaultValue={[colourOptions[2], colourOptions[3]]}
                      isMulti
                      //name="colors"
                      options={colourOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Deal Stages"
                    />
                  </div>
                </Row>
              </CardHeader>

              
              <Table className="align-items-center  table-flush" responsive >
                <thead className="">
                  <tr className="">
                    <th scope="col">Candidate</th>
                    <th scope="col">Stage</th>
                    <th scope="col">Deal Date</th>
                    <th scope="col">No of Days</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                {table.map((item, index)=>(
                <tbody  >
                  <tr key={index} >
                    <th scope="row">{item.candidate}</th>
                    <td>{item.stage}</td>
                    <td>{item.dealdate}</td>
                    <td>{item.numberofdays}</td>
                   
                  </tr>
               
               
               
                
                </tbody>
                ))}
              </Table>
              
            </Card>
          </Col>
        
        </Row>
            
        
      </Container>
      
    </>
  );
};

export default Index;
