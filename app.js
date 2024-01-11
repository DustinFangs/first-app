/*const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("total memory: " + totalMemory);
console.log("total memory: " + freeMemory);

const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);*/

const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));