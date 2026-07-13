const { chromaClient } = require('../services/chorma.service');
const { generateEmbedding } = require('../services/ai.service')

async function createVectorDBTable(){
return await chromaClient.getOrCreateCollection({
            name: 'resume',
            embeddingFunction: null
        });
}

async function storeDataInVectoreDB(chunks) {
    const collection = await createVectorDBTable()

    let index = 0;

    for (const chunk of chunks) {

        const embedding =
            await generateEmbedding(chunk);

        await collection.add({
            ids: [`chunk-${index++}`],
            embeddings: [embedding],
            documents: [chunk]
        });
    }
}

async function getVectorDBData(){
    const collection = await createVectorDBTable()

const result =
   await collection.get();

console.log(result);
}

async function queryIntoVectorDB(embeddingInput) {
        const collection = await createVectorDBTable()
        return await collection.query({
            queryEmbeddings: [embeddingInput], nResults: 3
        })
}
module.exports = {
    storeDataInVectoreDB, getVectorDBData, queryIntoVectorDB
}
