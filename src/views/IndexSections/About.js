/*!

=========================================================
* PKC Technology
=========================================================


> Developed by Patson | www.patson.dev



*/
import React from 'react';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

export default function About() {
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="align-items-center">
          <Col lg="6">
            <h1 className="title text-primary">About Us</h1>
            <p className="mb-3 text-primary font-weight-bold">
              PKC Technology is a North Carolina based company set-up to help
              enterpreneurs focus on the business aspect of their enterprises by
              taking care of their IT needs.
            </p>
            <h4 className="text-primary mb-3 mt-3">
              <i class="fas fa-map-marked-alt"></i>&nbsp;Address
            </h4>{' '}
            <p className="font-medium-1 mt-1 text-primary">
              1228 Turkey Trot Road
            </p>
            <p className="font-medium-1 text-primary">Wendel NC</p>
            <p className="font-medium-1 mb-2 text-primary">27591</p>
            <h4 className="text-primary mb-3 mt-3">
              <i class="fas fa-phone-alt"></i>&nbsp;Phone
            </h4>
            <p className="font-medium-1 text-primary">919-696-4299</p>
            <h4 className="text-primary mb-3 mt-3">
              <i class="fas fa-envelope"></i>&nbsp;Email
            </h4>
            <p className="font-medium-1 text-primary">support@pkc.com</p>
          </Col>
          <Col className="mb-lg-auto mt-5" lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h2">Services And Technology</CardTitle>
              </CardHeader>
              <CardBody>
                <p>
                  Here at PKC Technology we assist you in achieving your goals
                  by determining the right services and technologies for your
                  business. Whether you are looking for enhanced IT security,
                  technology vendor management, network design or hardware
                  upgrades
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
