type Foobar = { bar: string | undefined };

function main() {
    // need to require prompt-sync or else we cannot use prompt()
    // requires 'pnpm install prompt-sync'
    const prompt = require('prompt-sync')();
 
    // printing here or else when we use prompt(), it will output this entire
    // block of text again.
    console.log(
        'Please choose from the following:\n' +
        '1) test functions\n' +
        '2) adding example (with inputs)\n' +
        '3) typeof keyword example\n' +
        '4) exact match example'
    );

    // this would otherwise be in the stdout, but prompt eats up the current
    // line of console output if you do not pass in anything.
    const userInput: string = prompt('Choice: ');
    switch(userInput) {
        case '1':
            testFunctions();
        case '2':
            addingExampleWithInputs();
        case '3':
            typeofExample();
        case '4':
            exactMatchExample();
    }
}

function addingExampleWithInputs(): void {
    // prompting for two numbers and then adding up the result
    // taking this opportunity to practice with user input
    const prompt = require('prompt-sync')();
    const number1: number = +prompt('Number 1: ');
    const number2: number = +prompt('Number 2: ');
    const result: number = add(number1, number2);

    console.log(number1 + ' + ' + number2 + ' = ' + result);
}

/**
    LESSON FUNCTION: simply adds 2 numbers and returns the result

    @param num1 first number
    @param num2 second number
    @returns result of addition
 */
function add(num1: number, num2: number): number {
    return num1 + num2;
}

function typeofExample() {
    let num: number = 1;
    let str: string = 'test';
    let bule: boolean = false;
    const typeofPrintDef: string = 'typeof operator print: ';

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
    const inpoot: number = 5;
    const inpootText: string = 'astring';
    const testDiffStr:string = 'diffstring';
    const testSameStr:string = 'astring';

    console.log('is ' + inpoot + ' a string? - result: ' + isString(inpoot));
    console.log('is ' + inpootText + ' a string? - result: ' + isString(inpootText));
    console.log('is ' + inpoot + ' an exact match of \'' + inpootText + 
        '\'? - result: ' + isExactMatch(inpoot, inpootText));
    console.log('is \'' + inpootText + '\' an exact match of \'' + testDiffStr + 
        '\'? - result: ' + isExactMatch(inpootText, testDiffStr));
    console.log('is \'' + inpootText + '\' an exact match of \'' + testSameStr + 
        '\'? - result: ' + isExactMatch(inpootText, testSameStr));
}

function isString(val: any): boolean {
    return (typeof val === 'string');
}

function isExactMatch(val1: any, val2: any): boolean {
    return (val1 === val2);
}

/**
    This function runs all of the "test" functions.
    Useful for displaying the different ways of writing typescript.
 */
function testFunctions(): void {
    testFoobar();
    testStrings();
}

/**
    This function displays the different representations of strings which are
    all valid.
 */
function testStrings(): void {
    // all of these are acceptable
    // singles are preferred typically
    const single: string = 'test';
    const double: string = "test";
    const backticks: string = `test`;
    console.log(single);
    console.log(double);
    console.log(backticks);
}

/**
    This function displays how using '!' can lead to compiling fine, but we
    can still return undefined (which is not a string)
 */
function testFoobar(): void {
    // We prefer to write strings with ' ' instead of " " in typescript
    const barries: Foobar = { bar:'fuck' };
    const undies: Foobar =  { bar:undefined };

    // Showing how these variables can be compiled and printed whether or not
    // they are undefined or a string.
    const test: string = getFoobar(barries);
    const undietest: string = getFoobar(undies);
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
function getFoobar(foobar: Foobar): string {
    return foobar.bar!;
}

main();