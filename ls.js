module.exports = (done) => {
  const fs = require('fs');

  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'ls'){
        fs.readdir('./', 'utf8', (err, files) => {
          if(err){
            done(err);
          } else {
            done(files.join('\n'));
          }
        });
    }
  });
};
