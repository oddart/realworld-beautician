import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const powerStyle = {
  textAlign: "center",
  marginBottom: "1em"
}

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row style={powerStyle}>
            <Col xsHidden md={4}></Col>
            <Col xs={12} md={4}>
              <h3>Contact Us</h3>
              <br />
              <p>Location</p>
              <p><b>Opp. Lead City University</b></p>
              <p><b>Toll Gate, Ibadan (NG)</b></p>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
          <Row style={powerStyle}>
            <Col xsHidden md={4}></Col>
            <Col xs={12} md={4}>
              <hr />
              <Col xs={12} md={6}>
                <Col xs={12}>Mobile</Col>
                <Col xs={12}>
                  <i class="fas fa-phone-square"></i> 08051464383
                </Col>
              </Col>
              <Col xs={12} md={6}>
                <Col xs={12}>WhatsApp</Col>
                <Col xs={12}>
                  <i class="fas fa-phone-square"></i> 08074457030
                </Col>
              </Col>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}