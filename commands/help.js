const path = require("path");
const fs = require("fs");

function HelpFn(dirPath) {
  console.log(`
    List of All the commands:
         node main.js tree "directoryPath"
         node main.js organize "directoryPath"
         node main.js help
  
    `);
}

module.exports = {
  helpKey: HelpFn,
};
