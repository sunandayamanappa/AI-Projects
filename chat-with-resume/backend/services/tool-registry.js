const { askQuestion } = require('../services/ai.service');
const { summary } = require('../services/summary.service');
const { compareResumeAgainstJD } = require('./compare.service')

const tools = {
    search_resume: {
        execute: askQuestion,
        needsContext: true
    },
    summarize_resume: {
        execute: summary,
        needsContext: true
    },
    compare_resume_against_jd:{
        execute: compareResumeAgainstJD,
        needsContext: true
    }

}

function getTool(toolName){
    return tools[toolName]
}

module.exports = {
    getTool
}