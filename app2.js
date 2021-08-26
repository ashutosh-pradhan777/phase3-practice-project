const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let arr = new Array();

  function read() {
    readline.question('Please enter your daily task(exit to stop)\n', data => {
        if(data !== "exit"){
            console.log(data);
            arr.push(data)
      fs.appendFile('data.txt',data+'\n','utf-8',err => {
          if(err)
          {
              console.log(err);
          }
      })
      read();
  }
  else{
      readline.close();
  }
    });
    }

    read();
    console.log(arr);