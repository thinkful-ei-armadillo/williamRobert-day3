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


