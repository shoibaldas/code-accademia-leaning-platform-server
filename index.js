const express = require('express')
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/category_courses.json');

app.get('/', (req, res) => {
    res.send('News API is running');
});

app.get('/category-courses', (req, res) => {
    res.send(categories);
});


app.listen(port, () => {
    console.log("News Agency Server is Running...", port);
})