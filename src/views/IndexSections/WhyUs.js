/*!

=========================================================
* PKC Technology
=========================================================


> Developed by Patson | www.patson.dev



*/
import React from 'react';
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

export default function WhyUs() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img
        alt="..."
        className="path"
        src={require('assets/img/path1.png').default}
      />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h1 className="title text-primary">Why Us</h1>
            <h4 className="text-primary font-weight-bold">
              We hire competent and likeable IT consultants capable of solving
              your problems and fulfilling your needs. Additionally, PKC
              consultants strive to make personal connections and share your
              hunger for growth.
            </h4>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="mb-2 text-primary">Thanks for stopping by!</h3>
            <h4 className="mb-0 text-primary">
              Let's get in touch on any of the following platforms:
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              href="https://twitter.com/pkc_technology"
              id="twittertooltip1"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-twitter" />
            </Button>
            <UncontrolledTooltip delay={0} target="twittertooltip1">
              Send Tweeter Message!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="linkedin"
              href="https://www.linkedin.com/in/pkc-technology"
              id="tooltip877922017"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Let's Connect on LinkedIn!
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
