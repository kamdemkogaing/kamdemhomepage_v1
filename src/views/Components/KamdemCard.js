import React from "react";


function KamdemCard() {
  
  return (
    <div className="card" style={{width : 'auto'}}>
      {/* <img className="card-img-top" src="img/patrick01.png" alt="Card image cap" /> */}
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
  );
}

export default KamdemCard;