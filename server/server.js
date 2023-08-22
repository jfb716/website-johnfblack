const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json())

app.get('/message', (req, res) => {
    res.json({ message: "Cat Pick" })
})

app.listen(0, () => {
    console.log('Server is running on port 0')
})