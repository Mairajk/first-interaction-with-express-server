import express from 'express'
const app = express()
const port = 3000


console.log("Hello");

app.get('/food', (req, res) => {
    res.send('Hello World! Here is some food for you')
    console.log(`${req.ip} is looking for some food`);
})

app.get('/water', (req, res) => {
    res.send('Hello World! Here is some water for you')
    console.log(`${req.ip} is looking for some food`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// 192.168.100.7:3000/