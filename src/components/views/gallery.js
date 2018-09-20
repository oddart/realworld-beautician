import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
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
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472407/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_d2gfygmsisx5___.jpg'} thumbnail responsive />
            </Col>
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472407/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_zkqgwn3unevh___.jpg'} thumbnail responsive />
            </Col>
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472397/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_e4eqk0ef77x___.jpg'} thumbnail responsive />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472397/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_6kylnfwcbvjj___.jpg'} thumbnail responsive />
            </Col>
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472396/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_4mfgle5spgkm___.jpg'} thumbnail responsive />
            </Col>
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472396/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_1tlm60axfsmo___.jpg'} thumbnail responsive />
            </Col>
          </Row>
          <Row className="twin-inverse">
            <Col xsHidden md={2}></Col>
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472395/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_2stwsnw2n2wi___.jpg'} thumbnail responsive />
            </Col>
            <Col xs={12} md={4} className="pic">
              <Image alt="Clients" title="Clients" src={'https://res.cloudinary.com/poetrique/image/upload/v1537472395/clients/realworld_beautician/realworldrb____utm_source_ig_share_sheet_igshid_1emxvrkmququk___.jpg'} thumbnail responsive />
            </Col>
            <Col xsHidden md={2}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
