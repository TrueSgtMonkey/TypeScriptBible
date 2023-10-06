[Back](./../README.md)

# Core Types
## number
* Can be integers, floats, signed integers/floats, etc.

## string
* single, double, and backticks
```ts
// all of these are acceptable
// singles are preferred typically
const single: string = 'test';
const double: string = "test";
const backticks: string = `test`;
```

## boolean
* true/false
* Does **NOT** include "truthy"/"falsy" values

## object
* Any that are in Javascript as well as more specfic types.
* A generic object.
* Built-in type which is the most generic.
    * Want to get more specific than that.

```ts
// since this is just a generic object, this will be a bad idea
const person: object = {
    name: 'TheName',
    age:  24
}

// We will not be able to access this name
console.log(person.name);
```
As you can see here:

![Access Error with Types](./images/access_error_with_types.png)

This caused an error with typescript because this is a generic object.

A better way to accomplish this is to use curly braces:
```ts
// will still throw errors, but we are on track to fixing this
const goodPerson: {} = {
    name: 'test',
    age:  24
}
```
This is still a generic object type, but now it is customizable so that way we can build a correct type.

Below, here is how you would make a custom type:
```ts
// Specifying which variables it should have in the first set of curly braces
const goodPerson: {
    name: string,
    age:  number
} = {
    name: 'test',
    age:  24
}

// these will output correctly now
console.log(goodPerson.name + ': ' + goodPerson.age);
```
Here is the result after running this code:
```
test: 24
```
Note that we have to specify all of the members for const variables:
```ts
// this will lead to errors
const badGoodPerson: {
    name: string,
    age:  number
} = {
    name: 'test'
}
```
Also, we can just let type-inference do its work for this situation:
```ts
const betterPerson = {
    name: 'better',
    age: 25
}
```

# Language Syntax (with examples)
## Symbols
### ===
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

## Keywords
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

[Back](./../README.md)