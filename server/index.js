import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'


const PORT = process.env.PORT ?? 3000
const app = express()
const server = createServer(app)
// Init Socket.io server on top of HTTP server
const io = new Server(server, {
    // Recover messages if user reconnects within 3s
    connectionStateRecovery: {
        maxDisconnectDuration: 3000
    }
})

app.use(logger('dev'))

// Triggers when a client connects via WebSocket
io.on('connection', function(socket) {
    console.info("an user has connected!")
    
    // Triggers when that client disconnects
    socket.on('disconnect', function() {
        console.log('an user has disconnected')
    })
    
    // Listens for 'chat message' event from this client
    socket.on('chat message', function(msg) {
        // Broadcasts the message to all connected clients
        io.emit('chat message', msg)
    })
})

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(PORT, function() {
    console.info(`Server is running on port ${PORT}`)
})