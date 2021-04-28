import React from 'react';

import KamdemItemList from './components/Common/KamdemItemList.js';
const words = ['sky', 'blue', 'falcon', 'falcon', 'wood', 'cloud'];

class KamdemTopView extends React.Component {

  render() {
    return (
      <div className="container" style={{ marginTop : '30px',marginBottom : '30px' }}>
        <div className="row">
          <div className="col-sm-6">
            <div className="card" style={{width : 'auto'}}>
              <img className="card-img-top" src="img/patrick01.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Software-Developer</h5>
                <p className="card-text">
                  Danke, dass Du auf meine Seite schaust. Ich bin der Patrick und kam vor 15 Jahren nach Deutschland. Geboren bin ich in Zentralafrika, im schönsten Land: Kamerun. Es grenzt an den Atlantischen Ozean durch die Bucht von Bonny.
                </p>
                <strong>
                  <a href="mailto:patrick-kamdem@patelot.de" className="btn btn-secondary">Mich kontaktieren</a>
                </strong>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="mb-5">
                  <h2>WAS BIETE ICH AN</h2>
                  <h5>Web Technologien.</h5>
                  <div className="mb-5">
                    HTML, CSS, XML/XSLT, XSD-Schema, JavaScript, JQuery, Vue.js, Node.js, React, TypeScript, Ajax, Bootstrap, MySQL, UML, XAMPP, Photoshop, UX.
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb-5">
                  <h2>MEINE PROJEKTE</h2>
                  <h5>Woran ich arbeite.</h5>
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