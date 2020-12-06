const app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: "*"
    }
})

io.on("connection", socket => {
    // console.log("a user connected")
    socket.on("chat message", message => {
        io.emit("chat message", message)
    })
})

// app.get("/", (request, response) => {
//     response.send("<h1>Oi oi</h1>")
// })

http.listen(4000, () => {
    console.log("listening")
}) 