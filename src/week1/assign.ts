import fetch from 'node-fetch';

async function getPrice() {
    const resFtx = await fetch('https://ftx.com/api/markets/BTC/USDT')
        .then(res => res.json())
        .catch(function(err){console.log(err)});

    const resBinace = await fetch('https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT')
        .then(res => res.json())
        .catch(function(err){console.log(err)});

    let ftxPrice = resFtx.result.price;
    let binPrice = resBinace.price;
    let diff = ftxPrice - binPrice;
    let diffPercen = (diff/binPrice);

    console.log(`FTX BTC Price: ${ftxPrice}`);
    console.log(`Binace BTC Price: ${binPrice}`);
    console.log(`Difference: ${diff} (${diffPercen} %)`);
}
interface ohlc {
    open: number;
    high: number;
    low: number;
    close: number;
}

interface Chart {
    key: string;
    value: ohlc;
}

async function chartInpuit() {
    const chart = await fetch('https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT')
        .then(res => res.json())
        .catch(function(err){console.log(err)});    

    const arr = [];

    for(let i = 0; i < chart.length; i++){
        let j = 0;
        const time: number = chart[i][j]
        const date = new Date(time)
        
        const dateFull:string = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
        
        let op: number = chart[i][j+1]
        let hi: number = chart[i][j+2]
        let lo: number = chart[i][j+3]
        let clo: number = chart[i][j+4]

        const obj = {
            [dateFull]: {
                open: op,
                high: hi,
                low: lo,
                close: clo
            },
        }
        for(let key in obj){
            arr.push({
                key: key,
                value: obj[key]
            })
        }
        console.log(obj);
    }

    // console.log(arr[0].value.open, arr[1].value.high);
    
}

async function calculateOutputAmount(){
    const order = await fetch('https://api1.binance.com/api/v3/depth?symbol=BTCUSDT')
        .then(res => res.json())
        .catch(function(err){console.log(err)});
    //console.log(order.asks);

    const prompt = require('prompt-sync')();
    let usdtInput = prompt('Input USDT: ');
    let usdt = parseFloat(usdtInput);
    let cur = usdt; //TempInput
    let btc: number = 0;
    let bufLeft: number = 0;

    for(let i=0; i < order.asks.length; i++){
        let j:number = 1; //element vol
        let curAskUsdt = order.asks[i][j-1] * order.asks[i][j];
        let volBtc = parseFloat(order.asks[i][j]);

        // console.log('bids USDT: ' + curAskUsdt)

        if(cur > curAskUsdt){
            cur = cur - curAskUsdt;
            btc = btc + volBtc;
        }else{
            bufLeft = bufLeft + curAskUsdt;
        }
        // console.log('Now have: ' + cur);
        // console.log('Left USD: ' + bufLeft);
    }
    console.log(`Output BTC: ${btc}`)

}


// getPrice();
//chartInpuit();
calculateOutputAmount();

