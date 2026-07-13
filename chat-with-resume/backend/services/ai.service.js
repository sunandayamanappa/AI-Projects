const { Ollama } = require('ollama');
const ollama = new Ollama();


async function askQuestion(input) {
    const {question, context} = input
    const response = await ollama.chat({
        model: 'llama3.2',
        options: {
            temperature: 0
        },
        messages: [
            {
                role: 'user',
                content: `
                    You are a resume assistant.
                    Answer the question only from provided context.
                    If the answer is not available,say "I could not find that information in the resume."
                    Context: ${context}
                    Question: ${question}
                    `
            }
        ]

    });

    return response.message.content;

}

async function test() {
    const response = await ollama.embeddings({
        model: 'nomic-embed-text',
        prompt: `Angular Developer`
    })
    return response.embedding;
}

async function generateEmbedding(text) {
    const response = await ollama.embeddings({
        model: 'nomic-embed-text',
        prompt: text

    });

    return response.embedding;
}



module.exports = {
    askQuestion, test, generateEmbedding
}