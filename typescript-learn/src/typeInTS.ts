// type inferencing : TypeScript automatically determines the type from the assigned value.
let drink = "chai"; // inferred as string
let cups = Math.random() > 0.5 ? 10 : 5 // inferred as number

let channelName = "ChaiAurCode"
// channelName = 122232 // throws an error as type set as string initally

// type annotation : Explicitly specify the type of a variable.
let chaiFlavour: string = "masala chai"
chaiFlavour = "Ginder tea"
// chaiFlavour = 2 ---- throws error
