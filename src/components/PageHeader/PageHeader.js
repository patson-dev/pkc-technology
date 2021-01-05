/*!

=========================================================
* PKC Technology
=========================================================


> Developed by Patson | www.patson.dev



*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center">
          <h1 className="font-major text-break display-1 text-primary">
            PKC Technology
          </h1>
          <h3 className="text-primary">
            Simplifying information technology with the right mix of people,
            systems &amp; technologies.
          </h3>
        </div>
      </Container>
    </div>
  );
}
