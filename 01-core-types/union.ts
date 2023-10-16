// Here is a union example of how we can use a tuple

const implicit = {
    other: 30,
    tup: [2, 'test'],
    last: 'anotherTestString'
};

function entryPoint() {
    failedImplicit();
}

function failedImplicit() {
    // Although we want to keep this as a tuple with integer in [0] and string
    // in [1], typescript still allows us to do this:
    implicit.tup.push('uh oh');
    implicit.tup[1] = 15;

    console.log(implicit);
    
    // Illegal
    //example.tup[0] = true;
}

entryPoint();