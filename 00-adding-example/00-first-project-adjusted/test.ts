// need to add types in typescript

const button = document.querySelector("button");

// an '!' tells us that this element will never yield null
// the 'as' keyword followed by <element> is how we typecast in typescript
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// without giving a type to functions, they will implicitly be 'any' typed.
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
