const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.txt')


function readFile(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        })
    })
}

readFile(dataPath)
    .then(data => console.log(data.toString()))
    .catch(err => console.log(`Error: ${err.message}`))