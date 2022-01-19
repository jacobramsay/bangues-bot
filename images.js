const fs = require('fs');

function writeImagesFiles(images) {
    var file = fs.createWriteStream('images.txt');
    file.on('error', function(err) { /* error handling */ });
    images.forEach(function(imagePath, index) { 
        console.log(`writing ${imagePath} in images.txt`);
        file.write(imagePath + '\n'); 
    });
    file.end();
}

function appendImagesToFile(imagePaths) {
    imagePaths.forEach((path) => {
        appendImageToFile(path);
    })
}

function appendImageToFile(imagePath) {
    fs.appendFile('images.txt', imagePath + '\n', function (err) {
        console.log(`Appending ${imagePath} to file`);
        if (err) throw err;
        console.log('Saved File!');
      });
}

function createArrayFromFile() {
    const array = fs.readFileSync('images.txt').toString().split("\n");
    if(array[array.length - 1] === "") {
        array.pop();
    }
    return array;
}

module.exports = { appendImageToFile, writeImagesFiles, createArrayFromFile, appendImagesToFile};