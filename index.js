const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.use(express.json())

app.get('/', (req, res) => {
    // Tukar mesej ini supaya ada nama anda.
    // Ini penting supaya pensyarah tahu ini server anda bila buka website nanti.
    res.send('Hello World! AFIFIKRAM BERJAYAAAAA GUYSSSSS') 
})

app.listen(port, () => {
    // Saya betulkan tanda backticks (`) di sini supaya variable ${port} berfungsi
    console.log(`Example app listening on port ${port}`)
})