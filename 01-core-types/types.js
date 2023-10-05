// will throw errors if we try to access these elements
var badPerson = {
    name: 'test',
    age: 24
};
// Specifying which variables it should have in the first set of curly braces
var goodPerson = {
    name: 'test',
    age: 24
};
// these will output correctly now
console.log(goodPerson.name + ': ' + goodPerson.age);
