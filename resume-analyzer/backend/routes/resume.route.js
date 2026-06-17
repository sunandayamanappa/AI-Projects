const express = require('express');
const multer = require('multer');
const {extractText} = require('../services/pdf.service.js')
const {

    analyzeResume

} = require('../services/ai.service');
const router = express.Router();

const upload = multer({
  dest: 'uploads/'
});

router.post(
  '/upload',
  upload.single('resume'),
  async (req, res) => {

    try {
      if (!req.file || !req.file.path) {
        return res.status(400).json({ success: false, error: 'No file uploaded' });
      }
      const jobDescription = req.body.jobDescription;

      const text = await extractText(req.file.path);
      const analysis = await analyzeResume(text, jobDescription);
      res.json({
        success: true,
        content: analysis
  
      });
    }
    catch(error){
      console.error(error);

      res.status(500).json({
        success: false,
        error: error && error.message ? error.message : error
      });
    }

  }
);

module.exports = router;