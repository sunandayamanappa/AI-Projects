const { Ollama } = require('ollama');
const ollama = new Ollama();

async function compareResumeAgainstJD(input) {
    const {question, context, jd} = input;
    const response = await ollama.chat({
        model: "llama3.2",
        options: {
            temperature: 0
        },
        messages: [
            {
                role: 'user',
                content: `
                You are an expert technical recruiter.

                Compare the candidate's resume with the following job description.
                Resume:
                ${context}

                Job Description:
                ${jd}

                User Question:
                ${question}

                Return your answer in the following format:

                    Match Percentage:
                    Matching Skills:
                    Missing Skills:
                    Recommendation:

                    Be honest and base your comparison only on the provided resume and job description.x₹
                `
            }
        ]
    })
    return response.message.content;
}

module.exports= {
    compareResumeAgainstJD
}