color1 = "0000FF";
color2 = "FF0000";
// console.log(parseInt(myString.substring(0, 2), 16))
// console.log(parseInt(myString.substring(2, 4), 16))
// console.log(parseInt(myString.substring(4, 6), 16))

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