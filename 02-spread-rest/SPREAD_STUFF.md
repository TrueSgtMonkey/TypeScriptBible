[Back](../README.md)

# Basic object specification
```ts
// Basic object with name, age, and cool
const thing = {
    name: 'A';
    age: 12;
    cool: true;
};
```

# Spread Operator
```ts
// Use thing (our basic object) as a specification of sorts
const something = {...thing, age: 10};
```
* This will allow us to make another object with all the same attributes as **thing**.
    * ***Without*** requiring us to re-specify everything 
* Can do this:
```ts
console.log(something.name); // prints 'A'
console.log(something.age);  // would print 10
console.log(something.cool); // prints true
```

# Rest Operator
```ts
// object with just the name of thing
const {name} = thing;
```
* Works as a "shortcut" type of thing so we can use "name" everywhere without
calling **thing.name**.
* This, however can lead to an error since **name** can be part of a library.
    * If this happens, you can do this:
```ts
const {name: newName} = thing;
```
* Still de-structures, but allows us to de-structure with a new custom name.

```ts
// The rest operator
const {age, ...rest} = thing;
```
* Allows us to call **name** or **cool** *without* having to call **thing.name** or **thing.cool** (respectively).
* Leaves out age.
    * We won't be able to call age.

[Back](../README.md)