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
app.use(express.static('public'))
app.use('/peerjs', peerServer)
app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
  console.log(res)
})

app.get('/:room', (req, res) => {
  console.log(req.params.room)
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    console.log("joined room")
    socket.join(roomId)
    socket.to(roomId).emit('user-connected', userId)
  })
})

server.listen(3000)