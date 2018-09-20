import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const powerStyle = {
  textAlign: "center",
  marginBottom: "1em"
}

export default class Info extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row style={powerStyle}>
            <Col xsHidden md={4}></Col>
            <Col xs={12} md={4}>
              <h3>Opening Hours</h3>
              <br />
              <p><b>9AM - 8PM</b></p>
              <p>Days of the Week</p>
              <p><b>Monday - Saturday</b></p>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}