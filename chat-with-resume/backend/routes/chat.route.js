const express = require('express');
const { getChunks } = require('../services/resume-store.service');
const { findRelevant, findRelevantWithEmbedding } = require('../services/search.service');
const { askQuestion, test, generateEmbedding } = require('../services/ai.service');
const { getVectorDBData, queryIntoVectorDB } = require('../services/vectordb.service');
const { decideTool , decideToolWithAI} = require('../services/agent.service')
const { summary } = require('../services/summary.service')

const router = express.Router();

router.post(
    '/ask',
    async (req, res) => {
        const { question } = req.body;
        const chunks = await getChunks();
        const questionEmbedded = await generateEmbedding(question);
        const tool = await decideToolWithAI(question);
        let answer = ''
        console.log('selected tool--------', tool);
        // const context = await findRelevant(question, chunks);
            const context = await findRelevantWithEmbedding(questionEmbedded, chunks);
            const contextFromVectorDB = (await queryIntoVectorDB(questionEmbedded)).documents[0].join('/n/n');

            
        if (tool == 'search_resume') {
            answer = await askQuestion(question, contextFromVectorDB)
            res.json({
                success: answer
            })
        }
        if (tool == 'summarize_resume') {
            answer = await summary(contextFromVectorDB)
            res.json({
                success: answer
            })

        }
        if (tool == 'analyze_resume_against_jd') {
            res.json({
                success: "Analyze tool is selected"
            })

        }




    }

)


module.exports = router