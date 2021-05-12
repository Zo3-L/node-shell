
module.exports = function (){
    process.stdout.write('prompt > ');
    process.stdin.on('data', (data) => {
        // const pwd = data.toString().trim();
      
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    })
};
