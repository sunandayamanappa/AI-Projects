const {PromptTemplate} = require('@langchain/core/prompts');

const explainCodePrompt = PromptTemplate.fromTemplate(
    `
        You are a Senior Software Engineer and Technical Interviewer.

                    Your task is to analyze the given source code.

                    First identify:

                    - Programming language
                    - Framework (if any)

                    Examples:
                    - Angular
                    - React
                    - Node.js
                    - Express
                    - Java
                    - Spring Boot
                    - Python
                    - Django
                    - HTML
                    - CSS
                    - JavaScript
                    - TypeScript

                    After identifying the language/framework, explain the code.

                    Return the answer in markdown using the following sections.

                    ## Language / Framework

                    ## What does this code do?

                    ## Step-by-step explanation

                    ## Important Concepts

                    ## Best Practices

                    ## Possible Improvements

                    ## Interview Questions

                    Code:

                    {code}
    `)


const findBugsPrompt = PromptTemplate.fromTemplate(
    `
    You are a Senior Software Engineer.

                Analyze the following code.
                 
                
                Return:

                1. Bugs
                2. Why they are bugs
                3. Suggested Fix
                4. Best Practices

                Code: {code}
    `
)

const generateUnitTestsPrompt = PromptTemplate.fromTemplate(
    `
    You are a Senior Software Engineer.

                Analyze the following code and write a high quality unit tests.
                 
                
                Return:

                - Cover positive cases.
                - Cover negative cases.
                - Cover edge cases.
                - Return only the test code.

                Code: {code}
    `
)


module.exports = {
    explainCodePrompt,
    findBugsPrompt,
    generateUnitTestsPrompt
}