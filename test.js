const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');
var arr = [];
console.log(arr);
while(ip !== "exit")
{
var ip = prompt('Enter task here: ')
if(ip !== 'exit')
{
    arr.push(ip)
    read(ip+'\n');
}
}
show();


function show(){
fs.readFile('data.txt','utf8',(err,data) =>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Your records: "+'\n');
        console.log(data);
        delRec();
    }
})
}

function read(ip)
{
    fs.appendFileSync('data.txt','\n'+ip,'utf8', (err) => 
    {
        console.log(err);
    })
}

function delRec()
{
    var ip = prompt('Which line would you like to delete? ')
    fs.readFile('data.txt','utf8', (err,data) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            arr.push(data)
        }
    })
    var data = arr.slice(0,ip-1).concat(arr.slice(ip,arr.length)).join('\n')

    fs.writeFile('data.txt',data, err => {
        if(err)
        console.log(err);
        else
        {
            console.log("New Records: \n"+ data);
        }
    })

    

}