import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import flick from "./assets/flick.png";

function App() {
  return (
    <div className="App">
      <Container className="text-center mt-5">
        <Row>
          <Col className="image-col">
            <img src={flick} alt="Flick" className="image" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="center-content">
              <h1 className="header">Critter Explorer</h1>
              <p className="subheader">
                Find what ACNH critters are out and about in your city!
              </p>
            </div>

            <div className="d-flex justify-content-center">
              <Input
                className="search-bar"
                placeholder="Enter a city name"
                type="search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <Button className="search-button" id="search-addon">
                <FaSearch />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
