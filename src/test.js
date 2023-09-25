myString = "FF00EE";
console.log(parseInt(myString.substring(0, 2), 16))
console.log(parseInt(myString.substring(2, 4), 16))
console.log(parseInt(myString.substring(4, 6), 16))

function colorEqualInterval(start, stop, n) {
    let value =[];
    let step = (stop - start) / (n - 1);
    for (let i = 0; i < n; i++) {
      value.push(Math.round(start + (step * i)).toString(16));
    }
    return value;
  }

console.log(colorEqualInterval(0, 255, 10));