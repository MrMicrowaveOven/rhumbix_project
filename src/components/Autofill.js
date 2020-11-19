// import { useState, useEffect } from 'react';

function Autofill(props) {
  const {value} = props

  const autofills = ['about', 'above', 'across', 'app', 'apple', 'appreciate', 'bad', 'ball', 'balloon', 'bell', 'cat']

  const validAutofills = autofills.filter(word => word.indexOf(value) === 0)

  return (
    <div className="autofill">
      {value && validAutofills.map((autofillOption) => {
        return <div key={autofillOption}>{autofillOption}</div>
      })}
    </div>
  );
}

export default Autofill;
