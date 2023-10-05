// NOTE: there will be A LOT of comments throughout these files. More than
//       what is considered readable.

const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

// In Javascript, we will have to do manual checking to make sure that we have
// numbers instead of strings.

/*
 * It would be better if we could never pass strings into this function in the
   first place.
 */
function add(num1, num2) {
  // I guess this is how you check for types in Javascript?
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

// will always add two strings together no matter what.
// When accessing the value of an element, then it will ALWAYS be a string.
// Concatenation.
button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
