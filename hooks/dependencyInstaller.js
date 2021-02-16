console.log("Running hook to install hooks pre-requisites");
module.exports = function (context) {
  return new Promise((resolve, reject) => {
    var child_process = require('child_process');
    child_process.exec('npm install', {cwd: __dirname}, function (error) {
      if (error !== null) {
        console.log('exec error: ' + error);
        reject('npm installation failed');
      }
      else {
        console.log('Hooks pre-requisites DONE !');
        console.log(resolve);
        resolve();
      }
    });
  });
};
