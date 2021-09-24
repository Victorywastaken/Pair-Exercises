// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
  //   const cmd = data.toString().trim();
  // })

process.stdout.write('prompt > ');

const done = (output) => {
  //show the output
  process.stdout.write(output);
  //shows the prompt
  process.stdout.write("\nprompt > ");
};

const exportFromPwd = require('./pwd');
exportFromPwd(done);

const exportFromLs = require('./ls');
exportFromLs(done);

const exportFromCat = require('./cat');
exportFromCat(done);

const exportCurl = require('./curl');
exportCurl(done);

