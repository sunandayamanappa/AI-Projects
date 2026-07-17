const express = require('express');
const { explainCode, findBugs, generateUnitTests } = require('../services/ai-without-langchain.service')
const { llmWithLangChain } = require('../services/ai-with-langchain.service');
const { explainCodePrompt, findBugsPrompt, generateUnitTestsPrompt } = require('../services/prompt.service')
const router = express.Router();

router.post('/explain', async (req, res) => {
    const {code} = req.body;
        // const response = await explainCode(code);
    const response = await llmWithLangChain(code, explainCodePrompt);

    return res.json({
        success: true,
        data: response
    })

});

router.post('/find-bugs', async (req, res) => {
    const {code} = req.body;
    // const response = await findBugs(code);
    const response = await llmWithLangChain(code, findBugsPrompt);


    return res.json({
        success: true,
        data: response
    })
})

router.post('/generate-unit-tests', async (req, res) => {
    const {code} = req.body;
    // const response = await generateUnitTests(code);
    const response = await llmWithLangChain(code, generateUnitTestsPrompt);

    return res.json({
        success: true,
        data: response
    })
})



module.exports = router

