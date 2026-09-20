// The 'unknown' type:
// Instead of 'any' write 'unknown'.

// Type narrowing: It means reducing a variable from a broader type to a more specific type based on a condition.

function getChai (kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...` // guaranteed that datatype will be string
    }
    return `Chai Order: ${kind}` // guaranteed that datatype will be number
}

// we can also find Truthyness ()
// ? : optional; msg would be sent or not.
function serveChai(msg?: string) { 
    if (msg) {
        return `Serving ${msg}`;
    } 
    return `Serving default masala chai`;
}

// best practices
// exhaustive checks
function orderChai(size: "medium" | "small" | "large" | number) {
    if(size === 'small') {
        return `small cutting chai...`
    }
    if(size === 'medium' || size === 'large') {
        return 'make extra chai'
    }
    return `chai order #${size} numbers` 
}

// special case of exhaustive checks
// many times while making classes, method names are same and get collided.
class KulhadChai{
    serve(){
        return `Serving kulhad Chai`
    }
}

class Cutting{
    serve(){
        return `Serving cutting Chai`
    }
}

function serve(chai: KulhadChai | Cutting){
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
}

// typescript allow us to make custom types and we will see type guards.
type ChaiOrder = {
    type: string;
    sugar: number; // it is a custom type; like this we make custom type to handle api response 
}

