const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const chatRoute = require('./routes/chat.route');
const uploadRoute = require('./routes/upload.route');
app.use('/api/chat', uploadRoute);
app.use('/api/chat', chatRoute);


app.listen(3000, ()=> {
    console.log('Server listening on port 3000....yay')
})