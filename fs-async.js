const { readFile, writeFile } = require("fs");

readFile("./folder/file-in-folder.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
