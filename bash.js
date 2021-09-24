// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
// })

process.stdout.write('prompt > ');

const exportFromPwd = require('./pwd');
exportFromPwd();

const exportFromLs = require('./ls');
exportFromLs();
