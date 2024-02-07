const fs = require('fs');
const path = require('path');
const drpath = path.join(__dirname,'files');
for (let index = 0; index < 5; index++) {
    fs.writeFileSync(`${drpath}/hello${index}.txt`, `'here is a simple file no'${index}`)
    
}