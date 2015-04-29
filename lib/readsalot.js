var fs = require('fs');

function load(directory) {
  var files = {};
  var path = process.cwd() + directory;

  fs.readdirSync(path).forEach(function(file) {
    if (fs.statSync(path + '/' + file).isDirectory()) return;
    var filename = file.split('.')[0].replace(/((\-|\_)[a-z0-9])/g, function(param) {
      return param.toUpperCase().replace(param[0],'');
    });
    files[filename] = fs.readFileSync(path + '/' + file, 'utf8');
  });

  return files;
}

module.exports = load;
