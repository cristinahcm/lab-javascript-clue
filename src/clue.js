// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Cristina',
    lastName: 'Hurtado',
    occupation: 'Graphic designer',
    age: 23,
    description: 'creative',
    image: '',
    color: 'yellow',
  },
  {
    firstName: 'Fernando',
    lastName: 'Zurita',
    occupation: 'Cybersecurity',
    age: 23,
    description: 'intelligent',
    image: '',
    color: 'blue',
  },
  {
    firstName: 'Marta',
    lastName: 'Estragués',
    occupation: 'Developer',
    age: 22,
    description: 'lovely',
    image: '',
    color: 'orange',
  },
  {
    firstName: 'Gato',
    lastName: 'Zurita',
    occupation: 'being a cat',
    age: 1,
    description: 'cute',
    image: '',
    color: 'black',
  },
  {
    firstName: 'Cuqui',
    lastName: 'Hurtado',
    occupation: 'being a dog',
    age: 6,
    description: 'best friend',
    image: '',
    color: 'white',
  },
  {
    firstName: 'Aaron',
    lastName: 'Romero',
    occupation: 'Project manager',
    age: 24,
    description: 'handsome',
    image: '',
    color: 'red',
  },
  // ...
];

// Rooms Array

const roomsArray = [
{
  name: "madrid"
},
{
  name: "warsaw"
},
{
  name: "london"
},
{
  name: "budapest"
},
{
  name: "new york"
},
{
  name: "amsterdam"
},
{
  name: "copenhague"
},
{
  name: "berlin"
},
{
  name: "prague"
},
{
  name: "paris"
},
{
  name: "rome"
},
{
  name: "lisbon"
},
{
  name: "barcelona"
},
{
  name: "viena"
},
{
  name: "dublin"
},
];

// Weapons Array

const weaponsArray = [
  {
    name: 'spoon',
    weight: 1,
    },
  {
    name: 'fork',
    weight: 2,
    },
  {
    name: 'toothbrush',
    weight: 3,
    },
  {
    name: 'lamp',
    weight: 4,
    },  
  {
    name: 'computer',
    weight: 6,
    },
  {
    name: 'glass',
    weight: 15,
    },
  {
    name: 'airpods',
    weight: 8,
    },
  {
    name: 'keyboard',
    weight: 9,
    },   
  {
    name: 'screen',
    weight: 7,
    }, 
];


// ITERATION 2

function selectRandom(arr) {
  let randomPlace = Math.floor(Math.random() * arr.length) 
  return arr[randomPlace]
} 

function pickMystery() {
  const randomSuspect = selectRandom(suspectsArray) 
  const randomWeapons = selectRandom(weaponsArray)
  const randomRoom = selectRandom(roomsArray)
  const randomMurder = {suspect: randomSuspect, weapon: randomWeapons, room: randomRoom}
  return randomMurder
}

object = pickMystery()
 
// ITERATION 3

function revealMystery(obj) {
  return `${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!` 
 // <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
}

console.log(revealMystery(object))

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
