
import React from 'react';

function KamdemItemList(props) {

  const words = props.words;
  const items = words.map(function (word, idx) {
    <li key={idx}>{word}</li>
  });

  return (
    <div>
      <h2>Rendering a list inside component</h2>
      <ul>{items}</ul>
    </div>
  );
}

export default KamdemItemList;