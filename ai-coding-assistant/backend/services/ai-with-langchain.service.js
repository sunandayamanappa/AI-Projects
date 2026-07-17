const { ChatOllama } = require('@langchain/ollama');

const llm = new ChatOllama(
    {
        model: 'llama3.2',
        temperature: 0
    }
)


async function llmWithLangChain(code, prompt) {
    // This is one way of using prompt template
    // const response = await llm.invoke(
    //     await prompt.format({code})
    // )

    //Another of using chain where pipe will handle invoke and format automatically
    const chain =  prompt.pipe(llm);
    const response = await chain.invoke({code})
    return response.content;
}

module.exports = {
    llmWithLangChain
}