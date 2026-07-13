const { Ollama } = require('Ollama');
const ollama = new Ollama();

async function summary(input) {
    const { context } = input
    const response = await ollama.chat({
        model: 'llama3.2',
        messages: [{
            role: 'user',
            content: `
                You are an expert recruiter.

                Summarize the following resume in exactly 5 concise bullet points.

                Focus on:
                - Years of experience
                - Core technologies
                - Major achievements
                - Companies worked for
                - Strengths

                Resume:

                ${context}
            `
        }]
    })

    return response.message.content;
}

module.exports = {
    summary
}