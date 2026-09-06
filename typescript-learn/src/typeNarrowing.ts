// Type narrowing: It means reducing a variable from a broader type to a more specific type based on a condition.

function getChai (kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`
    }
    return `Chai Order: ${kind}`
}

// we can also find Truthyness
function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    } 
    return `Serving default masala chai`;
}

function orderChai(size: "medium" | "small" | "large" | number) {
    if(size === 'small') {
        return `small cutting chai...`
    }
    if(size === 'medium' || size === 'large') {
        return 'make extra chai'
    }
    return `chai order #${size} numbers`
}

