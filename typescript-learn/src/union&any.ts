// Unions : A union type allows a variable to have more than one possible type.
let subs : number | string;
subs = 10;
subs = '1M'

    // usecase : 
    let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
    apiRequestStatus: 'success'

let airlineSeat : 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'window'
 
// any : basically turns off TypeScript's type checking for that value.
const orders = ['12', '20', '28', '42']
let currentOrder: string | undefined;
for(let order of orders) {
    if (order === '28') {
        currentOrder = order
        break
    }
}
console.log(currentOrder);

// summary : 
// - 'unions' can be used on default datatypes and we can make customised datatypes.
// - we should avoid 'any' as much we can.

