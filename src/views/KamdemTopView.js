import React from 'react';

class KamdemTopView extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src="img/patrick01.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Software-Developer</h5>
                <p className="card-text">Danke, dass Du auf meine Seite schaust. Ich bin der Patrick und kam vor 15 Jahren nach Deutschland. Geboren bin ich in Zentralafrika, im schönsten Land: Kamerun. Es grenzt an den Atlantischen Ozean durch die Bucht von Bonny.</p>
                <strong><a href="mailto:patrick-kamdem@patelot.de" className="btn btn-secondary">Mich kontaktieren</a></strong>
              </div>
            </div>
          </div>
          <div className="col-sm-6">The content text!!!</div>
        </div>
        <div className="row">
          <div className="col-sm-6">Content</div>
          <div className="col-sm-6">The content text!!!</div>
        </div>
      </div>
    );
  } 
}

export default KamdemTopView;