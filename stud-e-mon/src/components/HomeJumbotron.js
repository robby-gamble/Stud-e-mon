import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";

export default class HomeJumbotron extends React.Component {
  styles = {
    jumbobutton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  render() {
    return (
      <Row>
        <Col>
          <Jumbotron
            style={{
              backgroundImage: `url(${this.props.backgroundimg})`,
              backgroundSize: "cover",
              fontFamily: "Raleway",
              marginLeft:"25%",
              marginRight:"25.%"
            }}
          >
            
            <h3 style={{ textAlign: "center", color: "black"}}>
              {this.props.title}
            </h3>
            <p>
              <div style={this.styles.jumbobutton}>
                <Button
                  variant="light"
                  href={`${this.props.link}`}
                  style={{
                    borderColor: "black",
                    
                  }}
                >
                  {this.props.content}
                </Button>
              </div>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}
