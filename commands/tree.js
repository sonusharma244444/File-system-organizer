const path = require("path");
const fs = require("fs");

function treeFn(dirPath) {
  if (dirPath === undefined) {
    treeHelper(process.cwd(), "");
    return;
  } else {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
      treeHelper(dirPath, "");
    } else {
      console.log("kindly enter the correct path");
      return;
    }
  }
}

function treeHelper(dirPath, indent) {
  // is file or folder
  let isFile = fs.lstatSync(dirPath).isFile();
  if (isFile == true) {
    let fileName = path.basename(dirPath);
    console.log(indent + "├──" + fileName);
  } else {
    let dirName = path.basename(dirPath);
    console.log(indent + "└──" + dirName);

    let child = fs.readdirSync(dirPath);
    for (let i = 0; i < child.length; i++) {
      let childPath = path.join(dirPath, child[i]);
      treeHelper(childPath, indent + "\t");
    }
  }
}

module.exports = {
  treeKey: treeFn,
};
