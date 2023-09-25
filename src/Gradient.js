import React, { useState } from "react";
import './Gradient.css';

function Gradient() {
  const [color1, setColor1] = useState('#B993D6');
  const onChange1 = (e) => {
    setColor1(e.target.value);
  }
  const [color2, setColor2] = useState('#8CA6DB');
  const onChange2 = (e) => {
    setColor2(e.target.value);
  }

  return (
    <div>
      <form id="test">
        <div className='gradient-input' style={{backgroundImage:`linear-gradient(to right, ${color1} , ${color2})`}}>
          <input type='color' id="color1" value={color1} onChange={onChange1}></input>
          <input type='color' id="color2" value={color2} onChange={onChange2}></input>
        </div>
        <button type='submit'></button>
      </form>
    </div>
  );
}

export default Gradient;

