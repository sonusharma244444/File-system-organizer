const path = require("path");
const fs = require("fs");

function organizeFn(dirPath) {
  //   console.log("organize command implemented for", dirPath);
  // 1 input -> directory path given
  if (dirPath === undefined) {
    destPath = process.cwd();
    return;
  } else {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
      // 2 create -> organized _files -> directory
      destPath = path.join(dirPath, "organized _files");

      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath);
      }
    } else {
      console.log("kindly enter the correct path");
      return;
    }
  }

  organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
  //3 indentify categories of all the files present in that input directory.
  let childName = fs.readdirSync(src);
  // console.log(childName);

  for (let i = 0; i < childName.length; i++) {
    let childAddress = path.join(src, childName[i]);
    let isFile = fs.lstatSync(childAddress).isFile();
    if (isFile) {
      // console.log(childName[i]);
      let category = getCategory(childName[i]);

      // 4 copy / cut files to that organized directory inside of any of category folder

      sendFiles(childAddress, dest, category);
    }
  }
}

function sendFiles(srcFilePath, dest, category) {
  let categoryPath = path.join(dest, category);
  if (fs.existsSync(categoryPath) == false) {
    fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
  let destFilePath = path.join(categoryPath, fileName);

  fs.copyFileSync(srcFilePath, destFilePath);
  fs.unlinkSync(srcFilePath);

  console.log(fileName, "copied to ", category);
}

function getCategory(name) {
  let ext = path.extname(name);
  ext = ext.slice(1);

  for (let type in types) {
    let currentType = types[type];
    for (i = 0; i < currentType.length; i++) {
      if (ext == currentType[i]) {
        return type;
      }
    }
  }
  return "others";
}

module.exports = {
  organizeKey: organizeFn,
};
