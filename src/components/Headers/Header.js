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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import "./H.css";
import {BsFillPersonFill,BsStack,BsPersonLinesFill} from "react-icons/bs"
import {FaChartBar,FaChartPie} from "react-icons/fa"
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns";
const Header = () => {
  return (
    <>
      <div className="header  pb-8 pt-5 pt-md-8" style={{backgroundColor:""}}>
        <Container fluid>
          <div className="header-body  " /*style={{backgroundColor:"#E4EBF5",
          boxShadow:"8px 8px 7px 0px rgb( 120 120 120/ 80%), -8px -8px 7px 0 rgb(255 255 255 / 90%)"}}*/>
            {/* Card stats */}
            {/* <DateRangePicker/> */}
            <Row>
        <Col>
            <Card className="   align-items-center" style={{backgroundColor:"#E4EBF5",
            /*backgroundImage:"linear-gradient(to right,#FFB178, #FF78B1, #FF3C8E )"*/}}>
              <Row>
               <BsFillPersonFill size="2rem"/>
              </Row>
              <Row>
              <h2> CV Sent</h2>
              </Row>
              <Row>
              <h3> 1200</h3>
              </Row>
            </Card>
        </Col>

        <Col>
            <Card className="   align-items-center" style={{backgroundColor:"#E4EBF5"}}>
              <Row>
               <BsStack size="2rem"/>
              </Row>
              <Row>
              <h2> 1<sup>st</sup> Interview</h2>
              </Row>
              <Row>
              <h3> 1200</h3>
              </Row>
            </Card>
        </Col>

        <Col>
            <Card className="   align-items-center" style={{backgroundColor:"#E4EBF5"}}>
              <Row>
               <FaChartBar size="2rem"/>
              </Row>
              <Row>
              <h2>2<sup>nd</sup> Interview</h2>
              </Row>
              <Row>
              <h3> 1200</h3>
              </Row>
            </Card>
        </Col>

        <Col>
            <Card className="   align-items-center" style={{backgroundColor:"#E4EBF5"}}>
              <Row>
               <FaChartPie size="2rem"/>
              </Row>
              <Row>
              <h2>3<sup>rd</sup> Interview</h2>
              </Row>
              <Row>
              <h3> 1200</h3>
              </Row>
            </Card>
        </Col>

        <Col>
            <Card className="   align-items-center" style={{backgroundColor:"#E4EBF5",
            /*backgroundImage:"linear-gradient(to right,#A0BBFF, #EC77FF  )"*/}}>
              <Row>
               <BsPersonLinesFill size="2rem"/>
              </Row>
              <Row>
              <h2>Offers</h2>
              </Row>
              <Row>
              <h3> 1200</h3>
              </Row>
            </Card>
        </Col>
      </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
