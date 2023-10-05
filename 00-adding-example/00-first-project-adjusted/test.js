// need to add types in typescript
var button = document.querySelector("button");
// an '!' tells us that this element will never yield null
// the 'as' keyword followed by <element> is how we typecast in typescript
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// without giving a type to functions, they will implicitly be 'any' typed.
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
