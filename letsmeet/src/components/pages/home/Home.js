import React from 'react';
import Date from './date'
import { useState } from 'react';
import styled from 'styled-components';
import gmeet from './../../../assets/icons/gmeet.svg';
import {BiHelpCircle} from 'react-icons/bi';
import {MdOutlineFeedback,MdOutlineApps,MdAccountCircle,MdKeyboard} from 'react-icons/md';
import {IoIosSettings} from 'react-icons/io';
import {AiOutlineVideoCameraAdd} from 'react-icons/ai';
import Carousel from './carousel';
import {motion} from 'framer-motion';
import Dropdown from './dropdown';

const Home=()=>{
    const [join, setjoin] = useState('none');
    const [meet, setmeet] = useState('none');

    return(
        <HomePage>
            <Nav>
                <Gmeet>
                    <img src={gmeet} alt="Gmeet Icon" height={50} width={186}/>
                </Gmeet>
                <Utilities>
                    <DateDiv><Date/></DateDiv>
                    <Sbutton><BiHelpCircle size={24} color="#5F6368"/></Sbutton>
                    <Sbutton><MdOutlineFeedback size={24} color="#5F6368"/></Sbutton>
                    <Sbutton><IoIosSettings size={24} color="#5F6368"/></Sbutton>
                    

                    <Icons>
                        
                        <Sbutton><MdOutlineApps size={24} color="#5F6368"/></Sbutton>
                        <Sbutton className="profile"><MdAccountCircle size={34} color="#5F6368"/></Sbutton>
                    </Icons>
                </Utilities>
            </Nav>
            <Body>
            <Text>
                
                <LargeTextFont>Premium video meetings.<br/>Now free for everyone.</LargeTextFont>
                <SmallTextFont>
                    We re-engineered the service that we built for secure<br/>business meetings, Google Meet, to make it free and<br/>available for all.
                </SmallTextFont>
                <MeetingLink>
                    <MeetingButton
                    onClick={()=>{
                        setmeet('inline')
                    }} 
                    ><AiOutlineVideoCameraAdd size={20}/><div ><b>New Meeting</b></div></MeetingButton>
                    <div style={{height:`fit-content`, width:`fit-content`,position:`absolute`, display:`${meet}`}}
                    onBlur={()=>{
                        setmeet('none')
                    }}><Dropdown/></div>
                    <JoinD>
                    <SearchD>
                    <Key><MdKeyboard size={20}  color="#5F6368"/></Key>
                    <MCode id='idform' type='text' placeholder='Enter a code or link' onFocus={()=>{
                        setjoin('inline')
                    }} 
                    onBlur={()=>{
                        setjoin('none')
                    }}></MCode>
                    </SearchD>
                    <Join style={{display:`${join}`}} >Join</Join>
                    </JoinD>

                    
                </MeetingLink>
                <Line></Line>
                <LearnMore><Link>Learn More</Link> about Google Meet</LearnMore>
                
            </Text>
            <Caraousel>
                <Carousel/>
            </Caraousel>
            </Body>
        </HomePage>
    );
    
}

export default Home;
const DateDiv = styled.div`
    padding-right:12px;
`
const HomePage=styled.div`
    margin:0;
    `
const Nav = styled.div`
    height:64px;
    wdith:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-content: center;
    background-color:white;
    margin:0;
    padding:8px;
    position:sticky;
    
    `

const Gmeet = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    justify-content:center;
    width:fit-content;
    padding:12px;
    width-content;
    `


const Utilities = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:425px;
    background-color:white;
    overflow:visible;
    `

const IconsDate = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
const Icons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
const Sbutton = styled.button`
    height:48px;
    width:48px;
    border:0;
    background-color:transparent;

`


const Text = styled.div`
    height:fit-content;
    max-width: 35rem;
    padding: 1em 3em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    `


const LargeTextFont = styled.p`
    font-size:44px;
    font-family:sans-serif;
    text-decoration:bold;
    text-align: left;
    height:fit-content;
    width:fit-content;
    padding:0 0 22px;
    margin:0;
    `
const SmallTextFont = styled.p`
    font-size:18px;
    font-family: sans-serif;
    padding:0 0 54px;
    margin:0;
    color:#5F6368;

  `
const Body = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
    align-content:center;  
    width:100%;
    min-height:86%;
    position:absolute;
`
const Caraousel = styled.div`
    width:50%;
    display:flex;
    flexx-direction:row;
    justify-content:center;
    align-item:center;
`
const MeetingLink=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-content:center;
    height:fit-content;
    width:470px;
    margin-top:12px;
    margin-bottom:24px;
    flex-wrap:wrap;
    

`
const MeetingButton = styled.button`
    background-color:#1a73e8;
    color:#FFFFFF;
    border: 0px;
    height:48px;
    width:155px;
    border-radius:5px;
    font-size:16px;
    font-family:sans-serif;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:13px;
    cursor:pointer
`
const MCode = styled.input`
    font-size:16px;
    font-family:sans-serif;
    color:#5F6368;
    border: 0;
    height:44px;
    border-radius:6px;
    width:100%;

    &:focus{
        border:0;
        outline:none;
    }

    &::valid Join{
        color:#5F6368;
    }
`
const Line = styled.div`
    height:1px;
    width:538px;
    border-bottom:1px solid  #dadce0;
    margin:16px 0 0;
    margin-bottom:35px;
  `
const LearnMore = styled.p`
    text-decoration:none;
    font-size:16px;
    color:#5F6368;
    font-family:sans-serif;
`
const Link = styled.a`
    font-size:16px;
    color:#1a73e8;
    font-family:sans-serif;
    
    `
const Key = styled.label`
padding:10px 15px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

`

const SearchD = styled.div`
    border:1px solid  #5F6368;
    border-radius:6px;
    height:fit-content;
    max-width:274px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    &:focus-within{
        border:2px solid #1a73e8;
        width:236px;
    }

`
const JoinD = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:280px;

    Mcode:valid {
        
            color:#5F6368;
        }
`
const Join = styled.button`
    background-color:transparent;
    color:#1a73e8;
    height:44px;
    font-size:16px;
    font-family:sans-serif;
    width:60px;
    border:0;
`