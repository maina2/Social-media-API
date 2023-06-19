import express from 'express';
import config from './src/db/config.js';
import routes from './src/routes/routes.js';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json())



routes(app);

app.get('/', (req, res) => {
    res.send("Hello working API");
});


app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});