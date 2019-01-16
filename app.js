'use strict';

//Object Drills 1   
//Object Creator

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    },
  };
}
const obj = createMyObject();

//Object Updater

function updateObject(obj) {
  obj.foo = 'foo',
  obj.bar = 'bar',
  obj.bizz = 'bizz',
  obj.bang = 'bang';
  return obj;
}
updateObject(obj);

//Self-reference

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

// console.log(personMaker().fullName());

//Deleting Keys

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;

  return obj;
}

keyDeleter(obj);

// Object drills 2

function makeStudentReport(data) {
  const results = [];
  for (let i in data) {
    const student = data[i];
    results.push(`${student.name}: ${student.grade}`);
  }
  return results;
}

const data = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

// console.log(makeStudentReport(data));

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  const results = [];
  for (let i in students) {
    const student = students[i];
    student.status = 'In Summer School';
  }
  return students;
}

// console.log(enrollInSummerSchool(studentData));

function findById(items, idNum) {
  
  for (let i in items) {
    const item = items[i];
    if (item.id === idNum) {
      return item;
    }
  }
}
/*
const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
];

console.log(findById(testData, 3));
*/



function validateKeys(object, expectedKeys) {
  let counter = 0;
  for (let i in object) {
    counter ++;
  }

  if (counter === expectedKeys ) {
    return true;
  }
  else {
    return false;
  }
}

// const objectA = {
//   id: 2,
//   name: 'Jane Doe',
//   age: 34,
//   city: 'Chicago',
// };

// console.log(validateKeys(objectA, 3));



// New object drills

// 1. Objects initializers and methods

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (loaf.water / loaf.flour) * 100;
  }
};

// console.log(loaf.hydration());
// console.log(loaf);

// 2. Iterating over an object's properties

const newObj = {
  foo: 1,
  bar: 'cat',
  fum: 42,
  quux: 'dog',
  spam: 'rice'
};

// for (let i in newObj) {
//   console.log(i, newObj[i]);
// }

// ended morning session.
// 3. Arrays in objects

const hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(hobbit.meals[3]);

// 4. Arrays of objects

function createDude(name, jobTitle) {
  return {
    name,
    jobTitle,
  };
}

const will = createDude('Will', 'Student');
const bob = createDude('Bob', 'Student');
const rich = createDude('Rich', 'Instructor');

const people = [will, bob, rich];

//5. Properties that aren't ther

bob.boss = 'rich';
will.boss = 'rich';

// for (let i in people) {
//   if (people[i].boss !== undefined){
//     console.log(`${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss }.`);
//   } else {
//     console.log(`${people[i].jobTitle} ${people[i].name} doesn't report to anybody.`)
//   }
// }



// 6. Cracking the code 
// Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode(word) {
  const firstLetter = word.slice(0, 1);
  if (firstLetter in cipher) {
    return word[cipher[firstLetter] - 1];
  }
  return ' ';
}

function decodeWords(array) {
  let decodedMessage = '';
  for (let i in array) {
    decodedMessage += decode(array[i]);
  }
  return decodedMessage;
}

//console.log(decodeWords('craft block argon meter bells brown croon droop'.split(' '))); 

// 7. Factory Functions with LOTR 

function createCharacter(name, nickname, race, origin, attack, defense, weapon = 'their fists') {
  let character = {
    name, nickname, race, origin, attack, defense, weapon,
    describe: () => `${name} is a ${race} from ${origin} who uses ${weapon}`,
    evaluateFight: (char) => `Your opponent takes ${attack - char.defense < 0 ? 0 : attack - char.defense} damage and you receive ${char.attack - defense < 0 ? 0 : char.attack - defense} damage`
  };
  
  if (character.weapon !== 'their fists') {
    character.attack += 2;
  }

  return character;
}

const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring');

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff');

const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade');

const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril');

const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodlan Realm', 8, 5, 'Bow and Arrow');

const arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendale', 4, 7, 'Hadhafang');

const characters = [bilbo, gandalf, frodo, legolas, aragorn];

characters.push(arwen);



// console.log(characters
//   .find(function (element) {
//     return element.nickname === 'aragorn';})
//   .describe());


const hobbitses =
  characters
    .filter(function(element) {
      return element.race === 'Hobbit';
    });

const beefBoys = 
  characters
    .filter(function (element) {
      return element.attack > 5;
    });



// 8. Bonus: A Database Search

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const queryKey = Object.keys(query)[0]; 
  const queryVal = Object.values(query)[0]; 
  
  for (let i in arr) {         
    if (queryKey in arr[i] && queryVal === arr[i][queryKey]) {   
      return arr[i];                
    }
  }
  return null;
}



// console.log(characters
//   .find(function (element) {
//     return element.nickname === 'aragorn';})
//   .describe());

console.log(HEROES, { id: 1 });