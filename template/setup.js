const fs = require('fs');
const path = require('path');

const EMPTY_LINE = '';

const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename));
  } catch (error) {}
};
const deleteFolder = path => {
  try {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function(file, index) {
        const currentPath = `${path}/${file}`;
        if (fs.lstatSync(currentPath).isDirectory()) {
          deleteFolder(currentPath);
        } else {
          deleteFile(currentPath);
        }
      });
      fs.rmdirSync(path);
    }
  } catch (error) {}
};

const packagePath = path.join(__dirname, 'package.json');
const packageJSON = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

console.log(EMPTY_LINE);

console.log('📝 Extending package.json...');
const devDependencies = require('./devDependencies.json');
const updatedPackageJSON = Object.assign({}, packageJSON, devDependencies);
fs.writeFileSync(packagePath, JSON.stringify(updatedPackageJSON, null, 2));

console.log('🧹 Clean...');
deleteFile('setup.js');
deleteFile('devDependencies.json');

console.log('✅ Finished!');
