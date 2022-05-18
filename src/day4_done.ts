import fetch from 'node-fetch';

async function getUsers() {

        const response = await fetch('https://reqres.in/api/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json()
        .then(result => console.log('result is: ', JSON.stringify(result, null, 4)))

        return result;
 
}
//---------setInterval------------------------------------
function timeId(count: number):void{
    
    let timeId = setInterval(() => {
        console.log(count);
        count--;

        if (count == 0) {
            console.log('Done');
            clearInterval(timeId);
        }
    }, 1000);
}
timeId(4);
getUsers();