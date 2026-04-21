import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'


const PORT = process.env.PORT ?? 3000
const app = express()
const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery: {
        maxDisconnectDuration: 3000 //for avoiding losing messages in an interval of time
    }
})

app.use(logger('dev'))

io.on('connection', (socket) => {
    console.info("an user has connected!")
    
    socket.on('disconnect', () => {
        console.log('an user has disconnected')
    })
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(PORT, function() {
    console.info(`Server is running on port ${PORT}`)
})
