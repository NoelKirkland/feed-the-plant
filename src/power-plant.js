const Daisy = { soil: 0, light: 0, water: 0 };

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}

const wateredDaisy = changePlantState(Daisy, "water");
/* 
Three parameter version
const changeState = (state, prop, value) => ({
  ...state,
  [prop] : (state[prop] || 0) + value
})
 */

// Curryed version
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// Reference to line 24: if the property exists in our state then the value should stay the same (state[prop]), if it does not exist then CREATE it, and assign it a value of 0
// prop = (state[Prop] || 0 ) + value 
/* 
Long form:
const changeState = function(prop) {
  return function(value) {
    return function(state) { ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
} */

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}
/* 
This version is not encapsulated in that outer most function
const storeState2 = (stateChangeFunction) => {
  let currentState = {};
  const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
} */
/* 
const Person = { speed: 0, power: 0, strength: 0}

const superPower = changeState("power")(5000);
const superSpeed = changeState("speed")(5000);
 */

let plant = { soil: 0, light: 0, water: 0 }

// changeState() in on line 20
const blueFood = changeState("soil")(5);
const sunlight = changeState("light")(2);

const stateControl = storeState();

const blueFoodPlant = stateControl(blueFood);
console.log("blueFoodPlant soil: " + blueFoodPlant.soil + " light:" + blueFoodPlant.light + "\n");

const sunlightPlant = stateControl(sunlight);
console.log("sunlightPlant soil: " + sunlightPlant.soil + " light: " + sunlightPlant.light + "\n");