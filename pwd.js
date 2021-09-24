module.exports = () => {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ')[0];

    if (cmd === 'pwd') {
      process.stdout.write(process.cwd());
      process.stdout.write("\nprompt >");
    }
  });
};
