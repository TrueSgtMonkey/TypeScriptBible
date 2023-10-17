const thing = {
  namae: "A",
  age: 12,
  cool: true,
  name: "B",
};

// spread
const something = { ...thing, namae: "Paul" };

// a nice clean way to de-structure
const { namae } = thing;

// de-structuring

// can lead to errors
//const { name } = thing;

const { name: newName } = thing;
/*
const thing = {
  namae: "A",
  age: 12,
  cool: true,
  name: 'B'
};
*/
// rest operator
const { age, ...rest } = thing;

console.log("something: " + something.namae + "; " + something.age);
console.log("namae: " + namae);
console.log("newName: " + newName);
console.log("fuck.cool: " + rest.cool);
