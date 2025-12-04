const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/api', (req, res) => res.send('Hello from Backend!'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
