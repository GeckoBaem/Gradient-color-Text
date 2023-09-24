import React, { useState } from "react";
import './App.css';
import { getElementError } from "@testing-library/react";

function App() {
// let [color, colorChange] = useState([255, 255, 255]);

//   const handleSubmit = () => {

//     const handleChange = (event) => colorChange(event.target.value);

//     event.preventDefault();
//   };

// input type color 은 Hex로 출력 됨

  return (
    <div>
      <form id="test"/*onSubmit={handleSubmit}*/>
        <div className='gradient-input'>
          <input type='color' /*value={color}*/></input>
        </div>
        <button type='submit'></button>
      </form>
    </div>
  );
}

export default App;

