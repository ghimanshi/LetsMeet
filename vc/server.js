const express = require('express')
const app = express()
const cors = require('cors')
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
  }
})
const { v4: uuidV4 } = require('uuid')
const { ExpressPeerServer} = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug: true
})
app.set('view engine', 'ejs')
app.use(cors())
app.use('/peerjs', peerServer)
app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
  console.log("Sent: ",req.params.room)
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    console.log("room: ",roomId)
    console.log("joined room")
    console.log("user: ",userId)
    socket.join(userId)
    socket.to(roomId).emit('user-connected', userId)
  })
})

server.listen(3000)