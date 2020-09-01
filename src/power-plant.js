// class Plant{
//   constructor(){
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }
// }

// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water : (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil : (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light : (plant.light || 0 ) + 1
//   }
// };

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}
const Daisy = { soil: 0, light: 0, water: 0 };

const wateredDaisy = changePlantState(Daisy, "water");

// const changeState = (state, prop) => {
//   return {
//     ...state,
//   [prop]: (state[prop] || 0) + 1
//   }
// }

const Person = { speed: 0, power: 0, strength: 5000}


// const changeState = (state, prop, prop2, value) => ({
//   ...state,
//   [prop] : (state[prop] || 0) + value,
//   [prop2] : (state[prop2] || 0) + value
// })


const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const superPower = changeState("power")(5000)
const superSpeed = changeState("speed")(5000)

const Noel = superPower(Person);
const NoelFast = superSpeed(Noel);

// const Erich = changeState(Person, "speed", "power", -6000)

console.log(Noel);
console.log(NoelFast);
// console.log(Erich);

// const shallowClone = (obj) => {
//   return {
//     ...obj
//   }
// }
// const Clone = shallowClone(Person)
// console.log(Clone);
// console.log("Absolute equality ", Person === Clone);
// console.log("Relative equality ", Person == Clone);