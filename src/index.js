const express = require("express")
require('dotenv').config()

const app = express();
const port = process.env.PORT

app.get('/teste/leozito', (req, res) => {
    res.send('Boa noite famíslia')
})

app.listen(port, () => {
    console.log(`Servidor iniciado na port ${port}`)
})