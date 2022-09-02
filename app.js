// https://www.omnicalculator.com/finance/market-capitalization

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marketcapitalizationRadio = document.getElementById('marketcapitalizationRadio');
const priceofasingleshareRadio = document.getElementById('priceofasingleshareRadio');
const numberofoutstandingsharesRadio = document.getElementById('numberofoutstandingsharesRadio');

let marketcapitalization;
let priceofasingleshare = v1;
let numberofoutstandingshares = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marketcapitalizationRadio.addEventListener('click', function() {
  variable1.textContent = 'Price of a single share';
  variable2.textContent = 'Number of outstanding shares';
  priceofasingleshare = v1;
  numberofoutstandingshares = v2;
  result.textContent = '';
});

priceofasingleshareRadio.addEventListener('click', function() {
  variable1.textContent = 'Market capitalization';
  variable2.textContent = 'Number of outstanding shares';
  marketcapitalization = v1;
  numberofoutstandingshares = v2;
  result.textContent = '';
});

numberofoutstandingsharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Market capitalization';
  variable2.textContent = 'Price of a single share';
  marketcapitalization = v1;
  priceofasingleshare = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(marketcapitalizationRadio.checked)
    result.textContent = `Market capitalization = ${computemarketcapitalization().toFixed(2)}`;

  else if(priceofasingleshareRadio.checked)
    result.textContent = `Price of a single share = ${computepriceofasingleshare().toFixed(2)}`;

  else if(numberofoutstandingsharesRadio.checked)
    result.textContent = `Number of outstanding shares = ${computenumberofoutstandingshares().toFixed(2)}`;
})

// calculation
function computemarketcapitalization() {
  return Number(priceofasingleshare.value) * Number(numberofoutstandingshares.value);
}

function computepriceofasingleshare() {
  return Number(marketcapitalization.value) / Number(numberofoutstandingshares.value);
}

function computenumberofoutstandingshares() {
  return Number(marketcapitalization.value) / Number(priceofasingleshare.value);
}