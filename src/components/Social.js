import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const powerStyle = {
  textAlign: "center",
  marginBottom: "1em"
}

export default class Social extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xsHidden md={4}></Col>
            <Col xs={12} md={4}>
              <h3 style={powerStyle}>Like & Follow Us On</h3>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
          <Row>
            <Col xsHidden md={4}></Col>
            <Col xs={12} md={4}>
              <Col xs={2}></Col>
              <Col xs={3}>
                <a href="https://www.facebook.com/realworld.rb"><i class="fab fa-facebook-square fa-3x"></i></a>
              </Col>
              <Col xs={3}>
                <a href="https://www.instagram.com/realworldrb"><i class="fab fa-instagram fa-3x"></i></a>
              </Col>
              <Col xs={4}>
                <i class="fab fa-snapchat-square fa-3x"></i>
              </Col>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
          <Row>
            <Col xsHidden md={4}>
            </Col>
            <Col xs={12} md={4}>
              <h4 style={powerStyle}>@realworldrb</h4>
            </Col>
            <Col xsHidden md={4}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};