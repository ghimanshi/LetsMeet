import { useState, useEffect, useRef } from "react";
import React from "react";
import styled from 'styled-components';
import io from 'socket.io-client'
import "../../index.css";
import {Peer} from "peerjs"
const socket = io("http://localhost:3000",{debug:true})
socket.on("invalid-frame-header", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on('connect', () => {
    console.log('Connected to server');
  });
  socket.on('disconnect', () => {
    console.log('Disconnected to server');
  });
  

const Video = ()=>{
    const [ROOM_ID,setRoom] = useState();
    console.log("roomId1: ",ROOM_ID);
    const users = []
    const VideoRef = useRef();
    const vid = useRef();
    console.log(VideoRef.current)
    let myVideoStream
    const myVideo = document.createElement('video')
    myVideo.muted = true


    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch('http://localhost:3000/');
          const lastPart = res.url.substr(res.url.lastIndexOf('/') + 1);
              console.log(lastPart)
              setRoom(lastPart)
              console.log("roomid: ",ROOM_ID) // Do something with the data
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);

    useEffect(() => {
        
        // fetch("http://localhost:3000/")
        //   .then((res)=>{console.log(res.url)
        //   const lastPart = res.url.substr(res.url.lastIndexOf('/') + 1);
        //   console.log(lastPart)
        //   setRoom(lastPart)
        //   console.log("roomid: ",ROOM_ID)})
          
          
        if(ROOM_ID!=null){
          var peer = new Peer(undefined,{
            path:'/peerjs',
            host: '/',
            port: '3000'
          })
    
          peer.on('open', id=>{
            socket.emit('join-room', ROOM_ID ,id);
            console.log("roomid: ",ROOM_ID) // Do something with the data
            console.log("id:", id)
          })
          const connectToNewUser =(userId, stream)=>{
            console.log('newuser: ', userId)
            const call = peer.call(userId, stream)
            const video = document.createElement('video')
            call.on('stream', userVideoStream=>{
              addVideoStream(video, userVideoStream)
            })
          }
          
          function addVideoStream(video, stream) {
            console.log("Video: ",stream)
            video.srcObject = stream
            console.log("VideoSRC: ",video.srcObject)
            video.addEventListener('loadedmetadata', () => {
              video.play()
              .catch(error => {
                // Handle any errors that occur while trying to play the video
                console.log('Error playing video:', error);
              });
            })
            console.log(VideoRef.current)
            VideoRef.current.append(video)
          }
          
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
              console.log("hehe")
              console.log("user: ",userId)
              users.append(userId)
              console.log(users)
              setTimeout(connectToNewUser,1000,userId,stream)
            })
          
            
          })
          
          console.log("check")
          socket.on('join-room', () => {
            console.log('Received message:');
          });
          }
      },[]);
    
    return(
        <div ref={VideoRef} id="videoGrid">
            
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
