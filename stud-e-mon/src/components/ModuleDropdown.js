import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";


class ModuleDropdown extends Component {




  render() {
    return (
      <div>
        <div>
          <h1
            style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
          >
            Pick a subject
          </h1>
        </div>

        <div
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            paddingRight: "8%",
            paddingLeft: "8%",
          }}
        >
          <Accordion>
          <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                  Math
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
              <a href="/Home"><Card.Body>Algebra</Card.Body></a>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
              <a href="/Home"><Card.Body>Geometry</Card.Body></a>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
              <a href="/Home"><Card.Body>Calculus</Card.Body></a>
              </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Science
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
            <a href="/Home"><Card.Body>Chemistry</Card.Body></a>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
            <a href="/Home"><Card.Body>Biology</Card.Body></a>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
            <a href="/Home"><Card.Body>Physics</Card.Body></a>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Engineering
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
            <a href="/Home"><Card.Body>Computer Science</Card.Body></a>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
            <a href="/Home"><Card.Body>Civil Engineering</Card.Body></a>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
            <a href="/Home"><Card.Body>Electrical Engineering</Card.Body></a>
            </Accordion.Collapse>
          </Card>
          
          </Accordion>
        </div>
      </div>
    );
  }
}

export default ModuleDropdown;
