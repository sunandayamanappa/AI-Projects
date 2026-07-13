const express = require('express');
const multer = require('multer');
const { extractText } = require('../services/resume-reader.service.js')
const { createChunk } = require('../services/chunk.service');
const { saveChunks } = require('../services/resume-store.service.js');
const { postMessageToThread } = require('worker_threads');
const { storeDataInVectoreDB } = require('../services/vectordb.service.js')


const router = express.Router();
const upload = multer({
    dest: 'upload/'
})
router.post('/upload',
    upload.single('resume'),
    async (req, res) => {
        const text = await extractText(req.file.path);
        const chunks = createChunk(text);

        // Saving in local memory , on every refresh the upload resume will be vanished
        // const embeddedChunk = await saveChunks(chunks);

        // Saving in chroma DB, resume will be stored in DB and will not be vanished after refresh
        const embeddedChunk = await storeDataInVectoreDB(chunks);


        res.json({
            success: embeddedChunk
        })

    }
)


module.exports = router;