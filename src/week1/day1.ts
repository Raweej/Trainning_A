import { Agent } from "http";

//--------------------Types----------------------------------------
let curfirstName: string = "Raweeroj";
const curlName: string = "Anontachutikarn";
let curOld: number = 24;
let alive: boolean = true;
let hob: any[] = ["running","swimming","Gaming", 72];
let car: {type: string, lastName:string, year: number} = {
    type: "YAMAHA",
    lastName: "Alfa",
    year: 1997
};

enum sexual{ male, female, LGBTQ };
let user = {
    firstName: curfirstName,
    lastName: curlName
}
let villa = {
    name: "villa5",
    users: [user]
}
console.log(villa)

//--------------------class interface --------------------------------
interface Person {
    firstfirstName: string,
    lastfirstName: string,
    age: number
};

class User {
    public firstName: string;
    public lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getName():string {
        return `My name is: ${this.firstName} ${this.lastName}`;
    }
    getAge(): number {
        return this.age;
    }
}

let user1: User = new User(curfirstName, curlName, curOld);

console.log(user1.getName());

if(user1.firstName == "Raweroj"){
    console.log("True, U are Real Raweeroj");
}
else{
    console.log("You are not real Raweeroj. It's that u Marc?");
}
//---------------------------------operator----------------------------------------
let a: number = 10;
let b: number = 2;

console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);

//-------------------------for/ while/ do while-----------------------------------
let n: number = 0;
for (n = 1; n <= 10; n++) {
    console.log(n);
}

// while (n <= 10) {
//     console.log(n);
//     n++;
// }

// do {
//     console.log(n);
//     n++;
// } while (n <= 10);
console.log("Loop ended");

process.stdout.write("End for day1\n");
