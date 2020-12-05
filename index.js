const app = require("express")()
const http = require("http").createServer(app)

app.get("/", (request, response) => {
    response.send("<h1>Oi oi</h1>")
})

http.listen(4000, () => {
    console.log("listening")
}) 