import { useState, useEffect } from "react";
import React from "react";
import styled from 'styled-components';
import socketIO from 'socket.io-client'
import "../../index.css";
import {Peer} from "peerjs"
const socket = socketIO.connect("http://localhost:3000/")
socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

const Video = ()=>{
    const [ROOM_ID, setROOMID] = useState();
    const [url, setUrl] = useState();
    useEffect(() => {
        fetch("http://localhost:3000/")
          .then((res)=>{console.log(res.url)})
      }, []);
      useEffect(() => {
        fetch("http://localhost:3000/:room")
          .then((res)=>{console.log(res)})
      }, []);
    const videoContainer = document.getElementById('videoGrid')
    console.log(videoContainer)
    let myVideoStream
    const myVideo = document.createElement('div')
    myVideo.classList.add('video')
    myVideo.muted = true
    
    var peer = new Peer(undefined,{
        path:'/peerjs',
        host: '/',
        port: '3000'
      })

      const connectToNewUser =(userId, stream)=>{
        console.log('newuser', userId)
        const call = peer.call(userId, stream)
        const video = document.createElement('div')
        myVideo.classList.add('video')
        call.on('stream', userVideoStream=>{
          addVideoStream(video, userVideoStream)
        })
      }
      
      function addVideoStream(video, stream) {
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
        videoContainer.append(video)
      }
      peer.on('open', id=>{
        socket.emit('join-room', ROOM_ID, id);
      })
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      }).then(stream => {
        myVideoStream = stream;
        addVideoStream(myVideo, stream)
      
        peer.on('call',call=>{
          call.answer(stream)
          console.log("called")
          const video = document.createElement('video')
          call.on('stream', userVideoStream =>{
            addVideoStream(video, userVideoStream)
          })
        }, function(err) {
          console.log('Failed to get local stream' ,err);
        })
      
        socket.on('user-connected',(userId)=>{
          console.log(userId)
          setTimeout(connectToNewUser,1000,userId,stream)
        })
      })
      
    return(
        <div id="videoGrid">
            
        </div>
    );
}

export default Video

const Vid = styled.div`
    width:300px;
    height:300px;
    background-color:grey;
    margin:auto;
`
const Container = styled.div`
    width:100%;
    height:50vw;
    background-color:black;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-content:center;
`
