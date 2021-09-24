module.exports = () => {
  const fs = require('fs');
  process.stdin.on('data', (data) => {
    /**
     * process.stdin data is the prompt input:
     * by assigning varialbles to the first and
     * second strings we are able to recreate
     * cat FILENAME function through
     * node.js
     * also console.logs("I'm a cat")
     */
    const cmd = data.toString().trim().split(' ')[0];
    const fileName = data.toString().trim().split(' ')[1];

    if(cmd === 'cat'){
      console.log("I'm a cat");
      fs.readFile(fileName, 'utf8', (err, data) => {
        if(err){
          throw err;
        } else {
          console.log(data);
          process.stdout.write("\nprompt >");
        }
      });
    }
  });
};
