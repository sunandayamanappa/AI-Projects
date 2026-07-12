const fs = require('fs');
const pdf = require('pdf-parse');


async function extractText(file){
    const dataBuffer = fs.readFileSync(file);
    const data = await pdf(dataBuffer);
    return data.text

}

module.exports = {
    extractText
}