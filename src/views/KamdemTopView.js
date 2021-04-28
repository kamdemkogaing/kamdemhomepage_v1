import React from 'react';

import KamdemItemList from '../components/Common/KamdemItemList.js';
const words = ['Beratung', 'Analyse', 'Tests', 'IT - Architektur', 'Softwareentwicklung', 'UX Design'];

class KamdemTopView extends React.Component {

  render() {
    return (
      <div className="container" style={{ marginTop : '30px',marginBottom : '30px' }}>
        <div className="row">
          <div className="col-sm-6">
            <div className="card" style={{width : 'auto'}}>
              <img className="card-img-top" src="img/patrick01.png" alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Software-Developer</h4>
                <p className="card-text">
                  Danke, dass Du auf meine Seite schaust. Ich bin der Patrick und kam vor 15 Jahren nach Deutschland. Geboren bin ich in Zentralafrika, im schönsten Land: Kamerun. Es grenzt an den Atlantischen Ozean durch die Bucht von Bonny.
                </p>
                <div className="text-right">
                  <a href="mailto:patrick-kamdem@patelot.de" className="btn btn-secondary font-weight-bold">Mich kontaktieren</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="mt-5 my-5">
                  <h2>WAS BIETE ICH AN</h2>
                  <h5>Web Technologien</h5>
                  <div className="mb-5">
                    HTML, CSS, XML/XSLT, XSD-Schema, JavaScript, JQuery, Vue.js, Node.js, React, TypeScript, Ajax, Bootstrap, MySQL, UML, XAMPP, Photoshop, UX.
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb-5">
                  <KamdemItemList words={words} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default KamdemTopView;