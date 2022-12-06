const express = require('express');
const app = express();
const port = 4000


app.get('/', (req, res)=> {
    res.send('Welcome 1st page');
} )

app.get('/about', (req, res)=> {
    res.status(200).send('Welcome 2st page');
} )

app.listen(port, () => {
    console.log(`listning to port no ${port}`)
})