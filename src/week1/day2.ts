// //-------------define & called function-------------
interface User{
    name: string,
    birth: string,
    contract: string,
}

let user1: User = {name: "Raweeroj", birth: "17/12/1997", contract: "0966346678"};
let str1: string = user1.name + " " + user1.birth + " " + user1.contract;
let str2: string = "This is myProfile"


function createUser(name: string): string {
    return name;
}

function sayUser(name: string): void {
    console.log(`Hello ${name}.`);
}

function useLength(str: string):void {
    console.log(`Function length for str is: ${str.length}`);
}

function useIndexOf(str:string){
    let ind: number = str.indexOf("0966346678");
    console.log(`Function indexOf for str is: ${ind}`);
}

function useSplit(str: string){
    let sp: string = str.toString();
    console.log(`Function split for str is: ${sp.split("")}`);   
}

function joinStr(str1: string, str2: string ): void{
    let sum: string = str1.concat(" ",str2);
    console.log(`Function join for str is: ${sum}`);
}

sayUser(user1.name);
useLength(str1);
useIndexOf(str1);
useSplit(str1);
joinStr(str1,str2);
