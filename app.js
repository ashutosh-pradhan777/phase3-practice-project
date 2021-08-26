const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function read() {
  readline.question('Please enter your daily task(exit to stop)\n', data => {
      if(data !== "exit"){
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

function showTask()
{
    fs.readFile('data.txt','utf-8', (err,data) => {
        if(err){
            console.log(err);
        }
        else
        {
            console.log("Here is your daily task list: \n");
            console.log(data);
        }
    })
}

function deleteTask()
{

    var linenum;
    readline.question('Enter the line number you wish to delete', ln => {
        linenum = ln;
        fs.readFileSync('data.txt','utf8', (err,data) => 
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(linenum);
            var newdata = data.split('\n').slice(linenum-1,linenum+2);
            fs.writeFile('data.txt',newdata.toString(), err => 
            {
                console.log(err);
            });
        }
    })
    })
    readline.close();
    // fs.readFile('data.txt','utf8', (err,data) => 
    // {
    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     else
    //     {
    //         console.log(linenum);
    //         var newdata = data.split('\n').slice(linenum-1,linenum+2);
    //         fs.writeFile('data.txt',newdata.toString(), err => 
    //         {
    //             console.log(err);
    //         });
    //     }
    // })
}

read();
showTask();
  deleteTask();


