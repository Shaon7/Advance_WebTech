const { log } = require("console");
const fs = require("fs");

fs.writeFileSync("details.txt","This is a text file about student details");

const info = fs.readFileSync("details.txt","utf8");

console.log(info);
