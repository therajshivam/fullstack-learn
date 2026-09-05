// js code
/*
function greet (name) {
    return 'hello '+ name;
}
console.log(greet('shivam'));
console.log(greet(52)); // not expected outcome
console.log(greet(true)); // not expected outcome
*/

// ts code
function greet (name: string): string {
    return `Hello ${name}`;
}
console.log(greet('shivam'));
// console.log(greet(52)); // gives error because typechecking


// TS is add on to JS
// extra in TS is types -> data types
// TS runs like : TS --> process --> JS

// feature : typechecker, consistency in code 