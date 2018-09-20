import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

import '../../App.css';

const headStyle = {
  textAlign: "center"
};

export default class Services extends Component {
  render() {
    return (
      <div>
        <h1 style={headStyle}>Services</h1>
        <hr />
        <Grid>
          <Row className="twin-inverse">
            <Col xs={12} md={8}>
              <ListGroup style={headStyle}>
                <ListGroupItem>
                  <p>Fixing of Weaves</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Make-up</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Ghana Weaving</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Hair Treatment</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Manicure & Pedicure</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Barbing</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Braiding</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Dreadlocks</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Home Service</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Training</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Bridal Hair</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Tattoos</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs={12} md={4}>
              <Image alt="Realworld Beautician Banner" src={'https://res.cloudinary.com/poetrique/image/upload/v1537446250/clients/realworld.jpg'} title="Realworld Beautician Banner" responsive rounded />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};
