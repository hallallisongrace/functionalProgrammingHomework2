//Sort an array alphabetically using the sort method

function alphabeticalOrder(arr) {
      return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


  //return a sorted array without changing the original array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}
nonMutatingSort(globalArray);

//split a string into an array using the split method
function splitify(str) {
    return str.split(/\W/);
    }
    splitify("Hello World,I-am code");


//combine an array into a string using the join method
function sentensify(str) {
  return str.split(/\W/).join(" ");
  }
  sentensify("May-the-force-be-with-you");

//apply function programming to convert strings into URL slugs
function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "")
      .join("-")
      .toLowerCase();
  }

  //use every method to check that every element in an array meets a criteria 
  function checkPositive(arr) { 
  return arr.every(function(value) {
      return value > 0;
    });
  }
  checkPositive([1, 2, 3, -4, 5]);

  //use the sum method to check that any elements in an array meet a criteria 
  function checkPositive(arr) {
    return arr.some(elem => elem > 0);
  }
  checkPositive([1, 2, 3, -4, 5]);


  //introduction to currying and partial application
  function add(x) {
  return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  }
  add(10)(20)(30);
