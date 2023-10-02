import React, { useState } from "react";
import './Gradient.css';
import './fonts/fonts.css';
import 'react-toastify/dist/ReactToastify.css';
// import { react } from "@babel/types";
// import { transform } from "@babel/core";
import { toast, ToastContainer } from "react-toastify"
// import { type } from "@testing-library/user-event/dist/type";

function Gradient() {
  const [color1, setColor1] = useState('#B993D6');
  const [color2, setColor2] = useState('#8CA6DB');
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [gradient_value, setGradient_value] = useState(null);
  
  const onChange1 = (e) => {
    setColor1(e.target.value);
  }
  const onChange2 = (e) => {
    setColor2(e.target.value);
  }
  const onChange3 = (e) => {
    setText(e.target.value)
  }

  let hex_value = [];

  //HEX 입력값 등간격 계산 
  const EqualInterval = (e) => {
    e.preventDefault();
    const rgb = [1,2,3];
    let decimal_value = [];
    let hex_code = "";
    let a = [];
    let x = dataInput(color1);
    let y = dataInput(color2);

    if (text.length <= 1) {
      toast.error("Please write at least two characters!")
    } else {
      for (let n in rgb) {
        decimal_value.push(colorEqualInterval(x[n], y[n], text.length));  
      }
      for (let i in text) {
        hex_code = "";
        for (let j in rgb) {
          a = decimal_value[j][i].toString(16);
          a = a.padStart(2, "0");
          hex_code += a;
        }
        hex_value.push(hex_code);
      }
      setGradient_value(result());
      setIsVisible(true);
    }
  }

  //HEX 데이터 10진수 변환
  function dataInput(value){
    let array = [];
    array.push(parseInt(value.substring(1, 3), 16))
    array.push(parseInt(value.substring(3, 5), 16))
    array.push(parseInt(value.substring(5, 7), 16))
    return array;
  }

  //등간격 계산 함수
  function colorEqualInterval(start, stop, n) {
    let array =[];
    let step = (stop - start) / (n - 1);
    for (let i = 0; i < n; i++) {
      array.push(Math.round(start + (step * i)));
    }
    return array;
  }

  //innerHTML 방식 코드 생성
  function result() {
    let a = "";
    let text_array = [...text]
    for (let i in hex_value) {
      a += '<span style=\'color:#' + hex_value[i] + '\'>' + text_array[i] + '</span>';
    }
    return a;
  }

  function color_change() {
    let a = color1;
    setColor1(color2);
    setColor2(a);
  }

  return (
    <div>
      <form className="submit" onSubmit={EqualInterval}>
        <div className='gradient-input' 
        style={{backgroundImage:`linear-gradient(to right, ${color1} , ${color2})`}}>
          <div className="gradient-img" onClick={color_change}></div>
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
      {gradient_value&&isVisible!==null&&(<div className="result">
        <div dangerouslySetInnerHTML={{ __html:gradient_value}}></div>
        <span id="result-child">{gradient_value}</span>
      </div>)}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        draggable={false}
        hideProgressBar={false}
      />
    </div>
  );
  }

export default Gradient;

