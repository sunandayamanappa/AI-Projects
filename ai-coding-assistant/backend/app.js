const express = require('express');
const cors = require('cors');
const codeRoute = require("./routes/code.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/code", codeRoute);

app.listen(3000, () => {
    console.log('Server is listening..........')
})