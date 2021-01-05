/*!

=========================================================
* PKC Technology
=========================================================


> Developed by Patson | www.patson.dev



*/
import React from 'react';

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import PageHeader from 'components/PageHeader/PageHeader.js';

// sections for this page/view
import Services from 'views/IndexSections/Services.js';
import WhyUs from 'views/IndexSections/WhyUs.js';
import About from './IndexSections/About';

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle('index-page');
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle('index-page');
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Services />
          <About />
          <WhyUs />
        </div>
      </div>
    </>
  );
}
