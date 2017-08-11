(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

let breadTruck = {};

let breads =
{
  "white":0.90,
  "wheat":1.00,
  "italian":1.10
};

breadTruck.getBreads = () => {
  return breads;
};

module.exports = breadTruck;

},{}],2:[function(require,module,exports){
'use strict';

let cheeseTruck = {};

let cheeses =
{
  "american":0.50,
  "pepperjack":0.65,
  "provolone":0.60
};

cheeseTruck.getCheeses = () => {
  return cheeses;
};

module.exports = cheeseTruck;

},{}],3:[function(require,module,exports){
'use strict';

let condimentTruck = {};

let condiments =
{
  "mustard":0.10,
  "mayonnaise":0.10,
  "ranch":0.10
};

condimentTruck.getCondiments = () => {
  return condiments;
};

module.exports = condimentTruck;

},{}],4:[function(require,module,exports){
'use strict';
let $outPut = $('#outPut');
let runningTotal = 0;
let meats = require('./meats.js');
let breads = require('./breads.js');
let cheeses = require('./cheeses.js');
let condiments = require('./condiments.js');
let veggies = require('./veggies.js');
let sandwichMaker = require('./sandwichmaker.js');
let sandwichTruck = {};

sandwichTruck.breads = breads.getBreads();
sandwichTruck.meats = meats.getMeats();
sandwichTruck.cheeses = cheeses.getCheeses();
sandwichTruck.veggies = veggies.getVeggies();
sandwichTruck.condiments = condiments.getCondiments();

let createDOMSelection = (truck) => {
  let sandwichPartKey = Object.keys(truck);
  for (var i = 0; i < sandwichPartKey.length; i++) {
    let part = (truck[sandwichPartKey[i]]);
    $(' #outPut').append(
      `<div class=sandwichPartDiv id=${sandwichPartKey[i]}>
      <h3>${sandwichPartKey[i]}</h3>
      </div>`
    );
    let typeOfPartKey = Object.keys(part);
    for (var j = 0; j < typeOfPartKey.length; j++) {
      let price = (part[typeOfPartKey[j]]);
      let type = typeOfPartKey[j];
      $(` #${sandwichPartKey[i]} `).append(
        `<input class=typeCheckbox value=${price} type=checkbox name=${type}>${type}`
      );
    }
  }
};

let updateRunningTotal = (currentPrice) => {
  $('#runningTotal').html(
    `<h2>$${currentPrice}</h2>`
  );
};

createDOMSelection(sandwichTruck);

$(':checkbox').change((e) => {
  let thisItem = e.target;
  if (thisItem.checked) {
    sandwichMaker.addTopping(Number(thisItem.value));
    runningTotal = sandwichMaker.getTotalPrice();
    updateRunningTotal(runningTotal);
  } else {
    sandwichMaker.addTopping((Number(thisItem.value)*-1));
    runningTotal = sandwichMaker.getTotalPrice();
    updateRunningTotal(runningTotal);
  }
});

},{"./breads.js":1,"./cheeses.js":2,"./condiments.js":3,"./meats.js":5,"./sandwichmaker.js":6,"./veggies.js":7}],5:[function(require,module,exports){
'use strict';

let meatTruck = {};


let meats =
{
  "ham":0.70,
  "turkey":0.60,
  "chicken":0.65
};

meatTruck.getMeats = () =>  {
  return meats;
};

module.exports = meatTruck;

},{}],6:[function(require,module,exports){
'use strict';

let sandwichMaker = {};

let totalPrice = 0;

sandwichMaker.addTopping = (toppingPrice) => {
  totalPrice += toppingPrice;
};

sandwichMaker.getTotalPrice = () => {
  console.log(totalPrice.toFixed(2));
  return totalPrice.toFixed(2);
};

module.exports = sandwichMaker;

},{}],7:[function(require,module,exports){
'use strict';

let veggieTruck = {};

let veggies =
{
  "lettuce":0.20,
  "tomato":0.20,
  "onion":0.20
};

veggieTruck.getVeggies = () => {
  return veggies;
};

module.exports = veggieTruck;

},{}]},{},[4]);
