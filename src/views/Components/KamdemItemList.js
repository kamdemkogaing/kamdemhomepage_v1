
import React from 'react';

function KamdemItemList(props) {

  const words = props.words;
  const items = words.map((word, idx) => <li className="list-group-item" key={idx}>{word}</li>);

  return (
    <div>
      <h2>MEINE PROJEKTE</h2>
      <h5>Woran ich arbeite.</h5>
      <ul className="list-group">{items}</ul>
    </div>
  );
}

export default KamdemItemList;