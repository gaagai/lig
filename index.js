const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/', async (req, res) => {
    try {
        res.json(await Post.find())

        // .find() is a method on the model for fetching all documents
    } catch (err) {
        res.json({ message: err })
    }
})

const port = process.env.PORT || 5005;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});