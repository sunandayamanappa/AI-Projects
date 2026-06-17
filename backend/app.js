const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const resumeRoutes = require('./routes/resume.route');

app.use('/api/resume', resumeRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});