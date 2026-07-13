const { Ollama } = require('Ollama');
const ollama = new Ollama();

async function decideTool(question) {
    const q = question.toLowerCase();

    if (q.includes('summary') || q.includes('summarize')) {
        return 'summarize_resume';
    }

    if (q.includes('missing skills') || q.includes('job description') || q.includes('match score')) {
        return 'analyze_resume_against_jd';
    }
    return 'search_resume';
}

async function decideToolWithAI(question){
    const response = await ollama.chat({
        model: 'llama3.2',
        messages: [{
            role: 'user',
            content: `
            You are an AI agent with available tools:
            search_resume
            summarize_resume
            analyze_resume_against_jd
            generate_interview_questions
            compare_resume_against_jd

            Rules:
                - Return only JSON format response which is mentioned below, if needed return multiple tools in JSON
                JSON Format :
                {
                    steps: [
                        { 
                            tool: '<tool_name>'
                        }
                    ]
                }
                

            Question: ${question}
            `
        }]
    })
    
    return response.message.content;
}

module.exports = {
    decideTool, decideToolWithAI
}