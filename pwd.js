module.exports = (done) => {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ')[0];

    if (cmd === 'pwd') {
      done(process.cwd());
    }
  });
};
