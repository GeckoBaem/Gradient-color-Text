const color1 = "00FF";
color2 = "FF0000";
let array = [];
array.push(parseInt(color1.substring(0, 2), 16))
array.push(parseInt(color1.substring(2, 4), 16))
array.push(parseInt(color1.substring(4, 6), 16))

let again = ""
let a = ""
for (let i=0; i < 3; i++){
  a = array[i].toString(16);
  a = a.padStart(2, "0");
  again += a;
}
console.log(array);
console.log(again);

function range(start, end, step=1) {
  let array = [];
  for (let i = start; i < end; ++i){
    if (!(i % step)){
      array.push(i);
    }
  }
  return array;
}



function test(){
  array = range(1,10,2);
  for (const i of array){
    console.log(i);
  }

}

console.log(test())

function colorEqualInterval(start, stop, n) {
    let value =[];
    let step = (stop - start) / (n - 1);
    for (let i = 0; i < n; i++) {
      value.push(Math.round(start + (step * i)).toString(16));
    }
    return value;
}


 const len = "12345";
for (let i in len.length) {
  console.log(i);
}