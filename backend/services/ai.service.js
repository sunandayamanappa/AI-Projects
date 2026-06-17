const { Ollama } = require('ollama');

const ollama = new Ollama();

async function analyzeResume(resumeText, jobDescription) {
    const response = await ollama.chat({
        model: 'llama3.2',
        messages: [
            {
                role: 'user',
                content: `
You are an ATS Resume Analyzer.

Compare the resume

against the job description.

Return ONLY valid JSON.

{

  "matchScore": 0,

  "matchingSkills": [],

  "missingSkills": [],

  "recommendations": []

}

Resume:

${resumeText}

Job Description:

${jobDescription}
`
            }
        ],
        options: {

    temperature: 0

  }
    });

    const content = response.message.content.trim();
    try {

    if (typeof content === 'object') {

        return content;

    }

    return JSON.parse(content.trim());

} catch (error) {

    console.error('Parse Error:', error);

    console.error('Content:', content);

    throw error;

}
}

module.exports = {

  analyzeResume

};