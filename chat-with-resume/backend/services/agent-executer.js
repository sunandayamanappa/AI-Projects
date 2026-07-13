const { generateEmbedding } = require('../services/ai.service');
const { queryIntoVectorDB } = require('../services/vectordb.service');
const { decideTool, decideToolWithAI } = require('../services/agent.service');
const { get } = require('../routes/chat.route');
const { getTool } = require('../services/tool-registry')

async function execute(question) {
    const tool = await decideToolWithAI(question)
    const parsedTool = JSON.parse(tool);
    for (let step of parsedTool.steps) {
        const selectedTool = getTool(step.tool)
        if (selectedTool && selectedTool.needsContext) {
            const embeddedQuestion = await generateEmbedding(question)
            const context = (await queryIntoVectorDB(embeddedQuestion)).documents[0].join('/n/n')
            return await executeTool(selectedTool, question, context)
        }

        return await executeTool(selectedTool)
    }

}

function executeTool(tool, question, context, jd) {
    const input = {
        tool, question, context, jd
    }
    return tool.execute(input)
}


module.exports = {
    execute
}