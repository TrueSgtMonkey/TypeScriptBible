// will throw errors if we try to access these elements
var badPerson = {
    name: 'test',
    age: 24
};
// Specifying which variables it should have in the first set of curly braces
// We are also forced to make sure we specify everything
var goodPerson = {
    name: 'test',
    age: 24
};
/*
const badGoodPerson: {
    name: string,
    age:  number
} = {
    name: 'test'
}
*/
// It is better if we infer types though
var betterPerson = {
    name: 'better',
    age: 25
};
// these will output correctly now
console.log(goodPerson.name + ': ' + goodPerson.age);
