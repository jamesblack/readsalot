var fs = require('fs');
var path = require('path');

function load(directory) {
  var files = {};
  var dirPath = process.cwd() + directory;

  fs.readdirSync(dirPath).forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) return;

    var filename = path.basename(file, path.extname(file))
      .replace(/[-_\ ]/g, '-')  // Replace all the word separators with `-`
      .split('-')               // split the words into an array
      .map(function (word, i) { // camelCasify
        if (i === 0) { // First word we don't capitalize
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }
      })
      .join(''); // Come back together

    files[filename] = fs.readFileSync(dirPath + '/' + file, 'utf8');
  });

  return files;
}

module.exports = load;
