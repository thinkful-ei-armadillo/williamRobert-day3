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
/*
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

console.log(validateKeys(objectA, 3));
*/




