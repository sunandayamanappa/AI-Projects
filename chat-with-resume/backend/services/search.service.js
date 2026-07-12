function findRelevant(question, chunks) {
    const words =
        question
            .toLowerCase()
            .split(' ');

    let bestChunk = '';
    let bestScore = 0;

    chunks.forEach(chunk => {
        const text = chunk.toLowerCase();

        let score = 0;

        words.forEach(word => {
            if (text.includes(word)) {
                score++;
            }
        });

        if (score > bestScore) {
            bestScore = score;
            bestChunk = chunk;
        }
    });
    return bestChunk;
}

function cosineSimilarity(a,b) {
    let dotProduct=0, magnitudeA=0, magnitudeB=0;
    for(let i=0; i<a.length;i++){
        dotProduct += a[i]*b[i];
        magnitudeA += a[i]*a[i];
        magnitudeB += b[i]*b[i]
    }
    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);
    
    return dotProduct / (magnitudeA * magnitudeB)

}

function findRelevantWithEmbedding(question, chunks){
//   1     = identical

// 0.8   = very similar

// 0.5   = somewhat similar

// 0     = unrelated

// -1    = opposite

    let highestScore = -1;
    let bestChunk = null;
    let topChunks = [];
    for(let chunk of chunks){
        const score = cosineSimilarity(question, chunk.embedding);
     // for search in only one chunk
        // if(score > highestScore){
        //     bestChunk = chunk,
        //     highestScore = score
        // }

        // for multiple chunks
        topChunks.push({score, chunk});
    }
    const top3Chunks = topChunks.sort((a, b) => b.score - a.score);
    return top3Chunks.slice(0, 3).map(item => item.chunk.text).join('/n/n')
}

module.exports = {
    findRelevant, cosineSimilarity, findRelevantWithEmbedding
}