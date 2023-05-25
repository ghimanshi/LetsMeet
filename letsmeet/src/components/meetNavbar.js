import React,{useState} from "react";
import {FaMicrophone} from "react-icons/fa"
import {FaMicrophoneSlash} from "react-icons/fa"
import {BsCameraVideo} from "react-icons/bs"
import {BsCameraVideoOff} from "react-icons/bs"
import {FaRegClosedCaptioning} from "react-icons/fa"
import {GoSmiley} from "react-icons/go"
import {MdIceSkating, MdPresentToAll} from "react-icons/md"
import {IoHandRightOutline} from "react-icons/io"
import {SlOptionsVertical} from "react-icons/sl"
import {MdCallEnd} from "react-icons/md"
import {BiInfoCircle} from "react-icons/bi"
import {MdOutlinePeopleAlt} from "react-icons/md"
import {MdOutlineMessage} from "react-icons/md"
import {FaShapes} from "react-icons/fa"
const nav=()=>{
    var hours = new Date().getHours();
    var mins = new Date().getMinutes();
    cons [mic,setMic] = useState(true);
    cons [vid,setVid] = useState(true);
    return(
        <div>
            <div>
                <p>
                    {hours}:{mins}
                </p>
                <p>|</p>
                <p>
                    roomID
                </p>
            </div>
            <div>
                <div>
                    (mic?<FaMicrophone/>:<FaMicrophoneSlash/>)
                </div>
                <div>
                    (vid?<BsCameraVideo/>:<BsCameraVideoOff/>)
                </div>
            </div>
        </div>
    );
}