import React from "react";
import { useState } from "react";
import {BiPaperclip, BiCalendarAlt} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const Dropdown=()=>{
    const [s1,sets1] = useState('none');
    const [s2,sets2] = useState('none');
    const [s3,sets3] = useState('none');

    return(
       <div style={{height:`fit-content`, width:`fit-content`, display:`flex`, flexDirection:`column`, position:`absolute`, backgroundColor:`white`, boxShadow: `0 0 15px 1px #A0A0A0`,color:"#000000DE"}}>
            <Bars  onMouseEnter={()=>{
                        sets1('#DCDCDC')
                    }} 
                    onMouseLeave={()=>{
                        sets1('#FFFFFF')
                    }}
                    style={{backgroundColor:`${s1}`}}>
                <BiPaperclip size={24} color="#000000DE"/>
                <Text>Create a meeting for later</Text>
            </Bars>
            <Bars onMouseEnter={()=>{
                        sets2('#DCDCDC')
                    }} 
                    onMouseLeave={()=>{
                        sets2('#FFFFFF')
                    }}
                    style={{backgroundColor:`${s2}`}}>
                <AiOutlinePlus size={24} color="#000000DE"/>
                <Link to="/Vc"><Text>Start an instant meeting</Text></Link>
                
            </Bars>
            <Bars onMouseEnter={()=>{
                        sets3('#DCDCDC')
                    }} 
                    onMouseLeave={()=>{
                        sets3('#FFFFFF')
                    }}
                    style={{backgroundColor:`${s3}`}}>
                <BiCalendarAlt size={24} color="#000000DE"/>
                <Text>Schedule in Google Calendar</Text>
                
            </Bars>

       </div>
    )
}

export default Dropdown;

const Bars = styled.div`
    padding:0 16px;
    width:274px;
    height:48px;
    font-size:16px;
    font-family:sans-serif;
    display:flex;
    align-items:center;
    cursor:pointer;
`
const Text = styled.h4`
    margin-left:24px;
`