import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import '../../App.css';

const powerStyle = {
  textAlign: "center"
};

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <h1 style={powerStyle}>Gallery</h1>
        <hr />
        <Grid>
          <Row>
            <Col xs={12} md={4}>
            </Col>
            <Col xs={12} md={4}>
            </Col>
            <Col xs={12} md={4}>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
            </Col>
            <Col xs={12} md={4}>
            </Col>
            <Col xs={12} md={4}>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
            </Col>
            <Col xs={12} md={4}>
            </Col>
            <Col xs={12} md={4}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
