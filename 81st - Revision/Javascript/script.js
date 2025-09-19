// first class functions functions can be used as values for functions

// high order funcition - check notes

// pure vs impure versions

// pure - pure function se baahr ki value nahi badalti

let val2 = 12;

function func1() {
  console.log("hello");
}

// impure - opposite
function func2() {
  val2++; //this changes value of val2
}
