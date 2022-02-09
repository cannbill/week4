// let num = 1234;
// let string = "Yo";
// let boolean = true;

// let array = ["1", "2", "3", "4"];
// array.push("5");

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let balance = 1000;
// const myFunction = (num) => {
//     return balance - num;
// }

// console.log(myFunction(100));

// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
    
//     get name() {
//         return this._name;
//     },
//     get drink() {
//         this._thirst -= 10;
//         return this._thirst;
//     }
// }

// console.log(rosie.name());
// console.log(rosie.drink);

class Cars {
    constructor(reg, arrival, hourlyCharge) {
        this._reg = reg;
        this._arrival = arrival;
        this._hourlyCharge = hourlyCharge;
        this._hasPaid = false;
    }

    get hasPaid() {
        return this._hasPaid;
    }

    getDeparture(departure) {
    this._departureTime = departure;
    }

    amountPayable(departure) {
    return (this._departureTime - this._arrival) * this._hourlyCharge;
    }

    makePayment(amountPaid) {
    if (amountPaid >= this.amountPayable) {
        console.log(`Parking has been paid.`);
        this._hasPaid = true;
        } else {
        console.log(`Parking has not been paid.`);
        }
    }
}

class Staff extends Cars {
    constructor(staffNum, credits, reg, arrival, hourlyCharge){
        super(reg, arrival, hourlyCharge);
        this._staffNum = staffNum;
        this._creditAmount = credits;
    }
    applyDiscount() {
        this._hourlyCharge /= 4;
    }
}

const mj57akk = new Cars("mj57akk", 2, 1.50);
const staffObj = new Staff(12345, 100, "mj58akk", 2, 1.50);
// enters tickets, departure time is captured
mj57akk.getDeparture(10);
// read cost to our user
console.log(mj57akk.amountPayable());
console.log(mj57akk.makePayment(13.5));