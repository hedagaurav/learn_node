const fs = require('fs');

const path = require('path');

const dir_path = path.join(__dirname,'files');
console.log(dir_path);

for(i=0;i<5;i++){
    fs.writeFileSync(`${dir_path}/file${i+1}.txt`,`this is file ${i}.`);
}

fs.readdir(dir_path,(err,files)=>{
    files.forEach((file)=>{
        console.log(file);
    });
});