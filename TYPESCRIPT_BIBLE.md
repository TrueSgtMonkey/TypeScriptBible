[Back](./README.md)

# Bible Table of Contents
[Language Syntax (with examples)](#language-syntax-with-examples)
* [Symbols](#symbols)
    * [! (after element)](#when-used-after-an-element)
    * [! (before element)](#when-used-before-an-element)
    * [?](#nullish-check-generates-undefined)
    * [===](#exact-equality-check)
* [Keywords](#keywords)
    * [as](#as)
    * [typeof](#typeof)

# Language Syntax (with examples)
## Symbols
### !
#### When used after an element:
Means that there is no way **in a given situation** that something would *ever* be undefined.
```ts
const input1 = document.getElementById("num1")!;
```
Use this only when you have already checked and the HTML element will most likely never be tampered with.
* This is can produce code-smell if used incorrectly.
    * Below is a showcase of when it is *"smelly"* to use it as well as some better options:
```ts
type Foobar = {
  foo: string
  bar: number | undefined
};

// Less desirable
function getFoobar (foobar: Foobar) {
  return foobar.bar!
}

// Better option
function getFoobar (foobar: Foobar) {
  // You can also use '||' below. Nullish coalescing (??) is safer to use, in case foobar.bar is nullish.
  return foobar.bar ?? -1;
}

// You can also tackle the nullish possibility early on!
function getGoodbar (foobar: Foobar) {
  if(!foobar.bar) {
    return -1;
  }

  // The compiler knows that at THIS point, foobar.bar is 'number' instead of 'number | undefined'
  return foobar.bar
}
```
_____________________
### !
#### When used before an element:
* It is simply just a "not" as seen in the `getGoodbar` function above.
* This is really good for checking if an element is "nullish" ahead of time and is typically preferable to:
```ts
type Foobar = { bar: string | undefined };

function getFoobar (foobar: Foobar) {
    return foobar.bar!;
}
```
* It is better to do this instead:
```ts
type NestedObject = { something: { name: string } | undefined };

function example (foobar: NestedObject): string {
  if(!foobar.something) {
    return ''; // or however you want to return a base case falsy condition
  }

  // possibly lines and lines of code here...

  // No operator needed!
  return foobar.something.name;
}
```
_____________________________
### ?
#### nullish check (generates undefined)
If something is null, this will generate an 'undefined' at that line
* Similar to the '!' keyword, but won't cause errors if something goes wrong.

```ts
type NestedObject = { something: { name: string } | undefined };

function example (foobar: NestedObject): string {
  // It may be much better to use '?' instead of '!'
  return foobar.something?.name
}
```
_____________________________
### ===
#### Exact Equality Check
Checks if two variables are "exactly" equal to each other.
* Checks value and data type.
```ts
// will only return true if 'typeof val' returns a string
function isString(val: any): boolean {
    return (typeof val === 'string');
}

// will only return true if same type and data
function isExactMatch(val1: any, val2: any): boolean {
    return (val1 === val2);
}
```
_________________
_________________
## Keywords
### as
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
_________________
### typeof
Used to get the type of a certain value.
* Returns a string:
```ts
function typeofExample() {
    let num: number = 1;
    let str: string = 'test';
    let bule: boolean = false;
    const typeofPrintDef: string = 'typeof operator print: ';

    // note that typeof returns a string
    console.log(typeofPrintDef + (typeof num));
    console.log(typeofPrintDef + (typeof str));
    console.log(typeofPrintDef + (typeof bule));
}
```
This function will print out:
```
typeof operator print: number
typeof operator print: string
typeof operator print: boolean
```
Normally, this typeof operator is used to check types in javascript:
```ts
// printing out result no matter what, but only adding by 5 if num is a number
if (typeof num === 'number') {
    num += 5;
}
console.log('result=' + num);
```

[Back to table of contents](#bible-table-of-contents)

[Back](./README.md)