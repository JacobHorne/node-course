console.log('Beam me up...');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var res = notes.addNote();
console.log(res);

var total = notes.add(1, 10);
console.log(`return = ${total}`);

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}`);