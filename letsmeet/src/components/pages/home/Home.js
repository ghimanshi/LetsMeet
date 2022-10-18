import React from 'react';
import Date from './date'
import styled from 'styled-components';



const Home=()=>{
    return(
        <HomePage>
            <Nav>
                <Gmeet>
                    <img src="" alt="Gmeet Icon"/>
                    <Title><Font> Meet</Font></Title>
                </Gmeet>
                <Utilities>
                    <div className="Date"><Date/></div>
                    
                

                <div className='icons'>
                    <button><img src="" alt="help"/></button>
                    <button><img src="" alt="feedback"/></button>
                    <button><img src="" alt="settings"/></button>
                    <button><img src="" alt="googleApps"/></button>
                    <button className="profile"><img src="" alt="profile"/></button>
                </div>
                </Utilities>
            </Nav>
            <Body>
            <Text>
                
                <LargeTextFont>Premium video meetings.<br/>Now free for everyone.</LargeTextFont>
                <SmallTextFont>
                    We re-engineered the srvice that we built for secure<br/>business meetings, Google Meet, to make it free and<br/>available for all.
                </SmallTextFont>
                <MeetingLink>
                    <MeetingButton>New Meeting</MeetingButton>
                    <MCode type='text' value='Enter a code or link'/>
                </MeetingLink>
                <Line></Line>
                <LearnMore><Link>Learn More</Link> about Google Meet</LearnMore>
                
            </Text>
            <Caraousel></Caraousel>
            </Body>
        </HomePage>
    );
    
}

export default Home;

const HomePage=styled.div`
    `
const Nav = styled.div`
    height:50px;
    wdith:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-content: center;
    `

const Gmeet = styled.div`
    display:flex;
    flex-direction:row;
    align-content:center;
    justify-conetnt:center;
    height:100%;
    width:fit-content;
    `
const Title = styled.div`
    font=size:22px;
    height:fit-content;
    color:#5F6368;
    margin:0;`
    

const Utilities = styled.div`
    display:flex;`

const Font = styled.p`
    font-size:22px;
    font-family:sans-serif;`

const Text = styled.div`
    padding: 16px 48px;
    height:fit-content;
    width:fit-content;
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
const SmallText = styled.div`
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
    height:90vh;  
`
const Caraousel = styled.div``
const MeetingLink=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-content:center;
    height:fit-content;
    width:430px;
    padding-bottom:24px;
    

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
`
const MCode = styled.input`
    font-size:16px;
    font-family:sans-serif;
    color:#5F6368;
    border: 1px solid #5F6368;
    height:44px;
    border-radius:5px;
    width:242px;
`
const Line = styled.div`
    height:1px;
    width:538px;
    border-bottom:1px solid  #dadce0;
    margin:16px 0 0;
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