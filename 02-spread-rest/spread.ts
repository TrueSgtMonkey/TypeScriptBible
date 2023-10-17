const thing = {
  namae: "A",
  age: 12,
  cool: true,
  name: 'B'
};

// spread
const something = { ...thing };

// a nice clean way to de-structure
const { namae } = thing;

// de-structuring

// can lead to errors
//const { name } = thing;

const {name: newName} = thing;

const { age, ...fuck } = thing;

console.log("something: " + something);
console.log("namae: " + namae);
console.log("newName: " + newName);
console.log("fuck.cool: " + fuck.cool);
