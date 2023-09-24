import React, { useState } from "react";
import './App.css';

function app() {
// const [color, colorChange] = useState([255, 255, 255]);

//   const handleSubmit = () => {

//     const handleChange = (event) => colorChange(event.target.value);

//     event.preventDefault();
//   };
  return (
    <div>
      <form /*onSubmit={handleSubmit}*/>
        <div className='gradient-input'>
          <input type='color' /*value={color}*/></input>
        </div>
        <button type='submit'></button>
      </form>
    </div>
  );
  }

export default App;

