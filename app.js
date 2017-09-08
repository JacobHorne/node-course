console.log('Beam me up...');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

var res = notes.addNote();
console.log(res);

var total = notes.add(1, 10);
console.log(`return = ${total}`);

console.log(_.isString('Andrew'))

nonDuplicateArray = _.uniq(['drew','drew',1,1,1,1,1,3]);
console.log(nonDuplicateArray);

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}`);