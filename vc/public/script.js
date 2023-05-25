// // const socket = io('/')
// const videoGrid = document.getElementById('video-grid')
// let myVideoStream
// const myVideo = document.createElement('video')
// myVideo.muted = true

// var peer = new Peer(undefined,{
//   path:'/peerjs',
//   host: '/',
//   port: '3000'
// })

// navigator.mediaDevices.getUserMedia({
//   video: true,
//   audio: false
// }).then(stream => {
//   myVideoStream = stream;
//   addVideoStream(myVideo, stream)

//   peer.on('call',call=>{
//     call.answer(stream)
//     const video = document.createElement('video')
//     call.on('stream', userVideoStream =>{
//       addVideoStream(video, userVideoStream)
//     })
//   }, function(err) {
//     console.log('Failed to get local stream' ,err);
//   })

//   socket.on('user-connected',(userId)=>{
//     setTimeout(connectToNewUser,1000,userId,stream)
//   })
// })

// peer.on('open', id=>{
//   socket.emit('join-room', ROOM_ID, id);
// })
 



// const connectToNewUser =(userId, stream)=>{
//   console.log('newuser', userId)
//   const call = peer.call(userId, stream)
//   const video = document.createElement('video')
//   call.on('stream', userVideoStream=>{
//     addVideoStream(video, userVideoStream)
//   })
// }

// function addVideoStream(video, stream) {
//   video.srcObject = stream
//   video.addEventListener('loadedmetadata', () => {
//     video.play()
//   })
//   videoGrid.append(video)
// }