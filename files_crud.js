const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
const filepath = `${dirpath}/apple.txt`;
fs.writeFileSync(filepath,'this is apple file.');

fs.readFile(filepath,'utf-8',(err,file)=>{
    console.log(file);
});
fs.appendFile(filepath,'it contains info about apple.',(err)=>{
    console.log('file updated.');
});

fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    console.log('file renamed.');
});

// fs.unlinkSync(`${dirpath}/fruit.txt`);