module.exports = function (){
    // process.stdout.write('prompt > ');
    // process.stdin.on('data', (data) => {
      false.readdir ('./', 'utf8', (err, files) => {
          if(err) {
              throw err;
          } else {
              process.stdout.write (filed.join ('\n'))
              process.stdout.write ("prompt > ")
          }
      })
    // })
};