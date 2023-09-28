import React, { useState } from "react";
import './Gradient.css';
import './fonts/fonts.css';
import { type } from "@testing-library/user-event/dist/type";


function Gradient() {
  const [color1, setColor1] = useState('#B993D6');
  const [color2, setColor2] = useState('#8CA6DB');
  const [text, setText] = useState("");
  
  const onChange1 = (e) => {
    setColor1(e.target.value);
  }
  const onChange2 = (e) => {
    setColor2(e.target.value);
  }
  const onChange3 = (e) => {
    setText(e.target.value)
  }

  const EqualInterval = (e) => {
    e.preventDefault();
    const len = [1,2,3];
    let binary_value = [];
    let x = dataInput(color1);
    let y = dataInput(color2);
    for (let i in len) {
    binary_value.push(colorEqualInterval(x[i], y[i], text.length));
    }
    console.log(binary_value)
  }

  // function range(start, end, step=1) {
  //   let array = [];
  //   for (let i = start; i < end; ++i){
  //     if (!(i % step)){
  //       array.push(i);
  //     }
  //   }
  //   return array;
  // }

  function dataInput(value){
    let array = [];
    array.push(parseInt(value.substring(1, 3), 16))
    array.push(parseInt(value.substring(3, 5), 16))
    array.push(parseInt(value.substring(5, 7), 16))
    return array;
  }

  function colorEqualInterval(start, stop, n) {
    let array =[];
    let step = (stop - start) / (n - 1);
    for (let i = 0; i < n; i++) {
      array.push(Math.round(start + (step * i)));
    }
    return array;
  }

  return (
    <div>
      <p id="title">Gradient Text generator</p>
      <form className="submit" onSubmit={EqualInterval}>
        <div className='gradient-input' 
        style={{backgroundImage:`linear-gradient(to right, ${color1} , ${color2})`}}>
          <input type='color' id="color1" value={color1} onChange={onChange1}></input>
          <input type='color' id="color2" value={color2} onChange={onChange2}></input>
        </div>
        <div className="text-input">
          {/* <label for="text-box">Enter the Text</label> */}
          <input type="text" id="text-box" value={text} onChange={onChange3} 
          placeholder="Enter the Text"></input>
        </div>
        <button type='submit'><b>DONE!</b></button>
      </form>
      <input value={color1}></input>
    </div>
  );
}

export default Gradient;

