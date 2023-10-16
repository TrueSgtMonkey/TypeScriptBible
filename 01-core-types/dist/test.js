function main() {
    // need to require prompt-sync or else we cannot use prompt()
    // requires 'pnpm install prompt-sync'
    var prompt = require('prompt-sync')();
    // printing here or else when we use prompt(), it will output this entire
    // block of text again.
    console.log('Please choose from the following:\n' +
        '1) test functions\n' +
        '2) adding example (with inputs)\n' +
        '3) typeof keyword example\n' +
        '4) exact match example\n' +
        '5) arrays example');
    // this would otherwise be in the stdout, but prompt eats up the current
    // line of console output if you do not pass in anything.
    var userInput = prompt('Choice: ');
    switch (userInput) {
        case '1':
            testFunctions();
        case '2':
            addingExampleWithInputs();
        case '3':
            typeofExample();
        case '4':
            exactMatchExample();
        case '5':
            arraysExample();
    }
}
function arraysExample() {
    var arr = [1, 'paul', true, { 'poop': 3 }];
    // Basic for loop using let
    for (var num = 0; num < arr.length; num++) {
        console.log('arr[' + num + ']: ' + arr[num]);
    }
    // let strArray: string[];
    // error bound code -- comment to see errors
    // strArray = ['test', 3];
    var strArray;
    strArray = ['test1', 'test2', 'milk kell'];
    for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
        var element = strArray_1[_i];
        console.log(element);
    }
    for (var _a = 0, strArray_2 = strArray; _a < strArray_2.length; _a++) {
        var element = strArray_2[_a];
        console.log(element.toUpperCase());
    }
}
function addingExampleWithInputs() {
    // prompting for two numbers and then adding up the result
    // taking this opportunity to practice with user input
    var prompt = require('prompt-sync')();
    var number1 = +prompt('Number 1: ');
    var number2 = +prompt('Number 2: ');
    var result = add(number1, number2);
    console.log(number1 + ' + ' + number2 + ' = ' + result);
}
/**
    LESSON FUNCTION: simply adds 2 numbers and returns the result

    @param num1 first number
    @param num2 second number
    @returns result of addition
 */
function add(num1, num2) {
    return num1 + num2;
}
function typeofExample() {
    var num = 1;
    var str = 'test';
    var bule = false;
    var typeofPrintDef = 'typeof operator print: ';
    // note that typeof returns a string
    console.log(typeofPrintDef + (typeof num));
    console.log(typeofPrintDef + (typeof str));
    console.log(typeofPrintDef + (typeof bule));
    if (typeof num === 'number') {
        num += 5;
    }
    console.log('result=' + num);
}
function exactMatchExample() {
    var inpoot = 5;
    var inpootText = 'astring';
    var testDiffStr = 'diffstring';
    var testSameStr = 'astring';
    console.log('is ' + inpoot + ' a string? - result: ' + isString(inpoot));
    console.log('is ' + inpootText + ' a string? - result: ' + isString(inpootText));
    console.log('is ' + inpoot + ' an exact match of \'' + inpootText +
        '\'? - result: ' + isExactMatch(inpoot, inpootText));
    console.log('is \'' + inpootText + '\' an exact match of \'' + testDiffStr +
        '\'? - result: ' + isExactMatch(inpootText, testDiffStr));
    console.log('is \'' + inpootText + '\' an exact match of \'' + testSameStr +
        '\'? - result: ' + isExactMatch(inpootText, testSameStr));
}
function isString(val) {
    return (typeof val === 'string');
}
function isExactMatch(val1, val2) {
    return (val1 === val2);
}
/**
    This function runs all of the "test" functions.
    Useful for displaying the different ways of writing typescript.
 */
function testFunctions() {
    testFoobar();
    testStrings();
}
/**
    This function displays the different representations of strings which are
    all valid.
 */
function testStrings() {
    // all of these are acceptable
    // singles are preferred typically
    var single = 'test';
    var double = "test";
    var backticks = "test";
    console.log(single);
    console.log(double);
    console.log(backticks);
}
/**
    This function displays how using '!' can lead to compiling fine, but we
    can still return undefined (which is not a string)
 */
function testFoobar() {
    // We prefer to write strings with ' ' instead of " " in typescript
    var barries = { bar: 'fuck' };
    var undies = { bar: undefined };
    // Showing how these variables can be compiled and printed whether or not
    // they are undefined or a string.
    var test = getFoobar(barries);
    var undietest = getFoobar(undies);
    console.log(test);
    console.log(undietest);
}
/**
    This function shows off how we can return undefined instead of a string.

    Compiles just fine, but can lead to runtime errors since it may return
    undefined.

    @param foobar - Foobar object containing bar variable we are after
    @returns The bar variable under our foobar object
 */
function getFoobar(foobar) {
    return foobar.bar;
}
main();
