const express = require("express")
const app = express()
const port = 3000
app.get('/', (req, res) => {
    var a = 1;
    res.send("Hello aWoraald!")
})
app.get('/tin', (req, res) => res.send("Hello aWoraald!"))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))