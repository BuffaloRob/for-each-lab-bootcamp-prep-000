function iterativeLog(array) {
    // Call `.forEach()` on this array, and inside the callback, log each 
    //element with the format `${index}: ${element}`.
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`);
    });
}

function iterate(callback) {
  //Call `.forEach()` on this array, passing the callback to `.forEach()`. Then
  //return the array that you initialized.
  var array = ['stuff', 'fillInLater'];

  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
    //Call `.forEach()` on the array, passing the callback as the 
    // `forEach` callback.
    array.forEach(callback);
}

