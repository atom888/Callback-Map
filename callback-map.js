// Lighthouse Labs - W1D4 - Exercise Callback - Maps //

var lyrics = ["ground",
"control",
 "to",
 "major",
 "tom"];


// function that takes in a numberic value and returns the length
function emlLength(num) {
  var length = num.length;
  return length;
}


function map(arr, length) {
  var result = [];
  for (var i = 0; i < arr.length; i += 1) { // loop through array
      result.push(emlLength(arr[i])); // add value into array
  }
  return result;
};

console.log(map(lyrics, emlLength));