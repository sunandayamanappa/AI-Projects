const {generateEmbedding} = require('../services/ai.service');
const { chromaClient } = require('../services/chorma.service.js');
let resumeChunks=[];


async function saveChunks(chunks){
    let index=0;
    for(let chunk of chunks) {
        const embedding = await generateEmbedding(chunk);
        resumeChunks.push({
            text: chunk,
            embedding
        })
    }
        
    return resumeChunks;
}


function getChunks(){
    return resumeChunks;
}


module.exports = {
    saveChunks,
    getChunks
}