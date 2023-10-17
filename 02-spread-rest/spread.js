var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var thing = {
    namae: "A",
    age: 12,
    cool: true,
    name: "B",
};
// spread
var something = __assign(__assign({}, thing), { namae: "Paul" });
// a nice clean way to de-structure
var namae = thing.namae;
// de-structuring
// can lead to errors
//const { name } = thing;
var newName = thing.name;
/*
const thing = {
  namae: "A",
  age: 12,
  cool: true,
  name: 'B'
};
*/
// rest operator
var age = thing.age, rest = __rest(thing, ["age"]);
console.log("something: " + something.namae + "; " + something.age);
console.log("namae: " + namae);
console.log("newName: " + newName);
console.log("fuck.cool: " + rest.cool);
