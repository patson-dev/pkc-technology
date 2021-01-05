/*!

=========================================================
* PKC Technology
=========================================================


> Developed by Patson | www.patson.dev



*/
import React from 'react';

// reactstrap components
import { Card, CardBody, Container, Row, Col } from 'reactstrap';

export default function Services() {
  return (
    <div className="section section-basic" id="basic-elements">
      <Container>
        <Row>
          <Col sm="12">
            <h1 className="title">Services</h1>
            <p className="mb-5">
              PKC Technology provides the following services:
            </p>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card className="text-white">
              <CardBody>
                <h3>
                  <i class="fas fa-users-cog"></i>&nbsp;&nbsp;IT Consulting
                </h3>
                <p className="mt-2">
                  PKC Tech offers consulation services in the form of advice on
                  how an organization can implement or optimize information
                  technology with the intention of achieving business goals.
                  <br />
                  <br />
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card className="text-white">
              <CardBody>
                <h3>
                  <i class="fas fa-project-diagram"></i> &nbsp;&nbsp;Project
                  Management
                </h3>
                <p className="mt-2 text-white">
                  Given a project, PKC Tech's primary objective is to help
                  organizations reach project goals and/deliverable within the
                  given constraints.
                  <br />
                  <br />
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card className="text-white">
              <CardBody>
                <h3>
                  <i class="fas fa-drafting-compass"></i>&nbsp;&nbsp;Web Design
                  (UI/UX)
                </h3>
                <p className="mt-2 text-white">
                  Our web design team is help you design app and/or website
                  layouts for computers & mobile devices, with a focus on
                  maximizing usability and simplyfing the user experience.
                  <br />
                  <br />
                </p>
              </CardBody>
            </Card>
          </Col>{' '}
          <Col lg="6" md="6" sm="12">
            <Card className="text-white">
              <CardBody>
                <h3>
                  <i class="fas fa-terminal"></i>&nbsp;&nbsp;Web Development
                </h3>
                <p className="mt-2">
                  Our developers can help your organization build anything from
                  a simple static web page to a complex web-based internet
                  application. All based on client design specifications.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
