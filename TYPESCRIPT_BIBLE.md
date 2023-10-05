[Back](./README.md)

# Symbols
## !
Means that we are sure that an element will not be null:
```ts
const input1 = document.getElementById("num1")!;
```
Use this only when you have already checked and the HTML element will most likely never be tampered with.
* Unsure if this is good practice or not.

# Keywords
## as
This is the typecasting keyword in typescript.
```ts
const input1 = document.getElementById("num1")! as HTMLInputElement;
```
Here, we are type-casting to an HTMLInputElement.
* We can ensure that if we do things like calling a input1.value, we won't get errors:
```ts
// this will throw typescript errors if we have not ensured that input1 or
// input2 are valid values or not
button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
```

[Back](./README.md)