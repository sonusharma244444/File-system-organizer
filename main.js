#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const helpObj = require("./commands/help");
const organizeObj = require("./commands/organize");
const treeObj = require("./commands/tree");

let destPath;
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};
// console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeObj.organizeKey(inputArr[1]);
    break;
  case "help":
    helpObj.helpKey();
    break;

  default:
    console.log("please input right command");
    break;
}
