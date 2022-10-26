const express = require('express')
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/category_courses.json');

app.get('/', (req, res) => {
    res.send('Accademia API is running');
});

app.get('/category-courses', (req, res) => {
    res.send(categories);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const getCourse = categories.find(n => n._id === id);
    res.send(getCourse);
});

app.listen(port, () => {
    console.log("Accademia Server is Running...", port);
})