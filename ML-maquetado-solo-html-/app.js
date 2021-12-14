const express = require("express")
const app = express()
let path = require("path")

let port = 3000

const publicPath = path.resolve(__dirname, "public")
app.use(express.static(publicPath))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.listen(port, () => console.log(`Port running in ${port}\n Abrir en el navegador http://localhost:${port}`))