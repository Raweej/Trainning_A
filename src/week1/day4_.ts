//------------------Promise--(use .then)------------------------------
let promise = new Promise((resolve, reject) => { // Pending, Resolved, Rejected
    setTimeout(() => resolve('Succes'), 1500)
}); 
promise.then( value => console.log(`Resolved: ${value}`)).then(result => callBack(list))

 //-----------------Rejuecting----------------------------
 function evenPromise(number: number) {
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            resolve(`${number} is an even number`);
        } else {
            reject(new Error(`${number} is not an even number`))
        }
    });
}

//-------------async/await-------------------------
async function doOne() {
    setTimeout(function () {
      console.log("this is task 1");
    }, 500);
} 
async function doTwo() {
    console.log("this is task 2");
}
async function doThree() {
    setTimeout(function() {
      console.log("this is task 3");
    },  1000)
}

async function main() {
    await evenPromise(2).then((value) => {
        console.log(value);
    }).catch(err => {
        console.log(err.toString());
    });
    
    await evenPromise(3).then((value) => {
        console.log(value);
    }).catch(err => {
        console.log(err.toString());
    });
    doOne();
    doTwo();
    doThree();//------------output is: 2 1 3 => This is async
}
//-------callback Function----------------------------------
const list = ['man', 'woman', 'child'];
function callBack(list: string[]){
    const newList = list.map(function(val){
        return val + 'kind';
    });
    console.log(newList);
}
main();




