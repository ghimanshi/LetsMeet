import {React, useState} from 'react';
import styled from 'styled-components';
import img1 from "../../../assets/images/img1.svg";
import img2 from "../../../assets/images/img2.svg";
import img3 from "../../../assets/images/img3.svg";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md';

const myCollection = [
    {
        label: "img1",
        imgPath:img1,
        heading:"Get a link that you can share",
        text:"Click New Meeting to get a link that you can send to people that you want to meet with"


    },
    {
        label: "img2",
        imgPath:img2,
        heading:"Plan ahead",
        text:"Click New Meeting to schedule meetings in Google Calendar and send invitations to participants"
    },
    {
        label: "img3",
        imgPath:img3,
        heading:"Your meeting is safe",
        text:"No one can join a meeting unless invited or admitted by the host"
    }
]
const color1=['#1a73e8','#dadce0','#dadce0']
const color2=['#dadce0','#1a73e8','#dadce0']
const color3=['#dadce0','#dadce0','#1a73e8']

const Carousel =()=>{

    const CollectionSize = myCollection.length;
    const [index, setActiveStep] = useState(0);
    function updateIndex(){
        const newIndex = index+1;
        if(index === CollectionSize-1)
        {
             setActiveStep(0);
        }
        else{
            setActiveStep(newIndex);
        }
        

    }
    function updateIndexB(){
        const newIndex = index-1;
        if(index === 0)
        {
            setActiveStep(CollectionSize-1);
        }
        else{
            setActiveStep(newIndex);
        }
        
    }

    

    return(
        <Wrapper>
        <Image>
            <Button onClick={()=>updateIndexB()}><MdKeyboardArrowLeft size={30} color="#5F6368"/></Button>
                <img src = {myCollection[index].imgPath} />
            <Button onClick={()=>updateIndex()}><MdKeyboardArrowRight size={30} color="#5F6368"/></Button>
        </Image>
        <Text>
            <Heading><p><b>{myCollection[index].heading}</b></p></Heading>
            <Content><p>{myCollection[index].text}</p></Content>

        </Text>
        <Dots>
            <Dot style={{backgroundColor:`${color1[index]}`}}></Dot>
            <Dot style={{backgroundColor:`${color2[index]}`}}></Dot>
            <Dot style={{backgroundColor:`${color3[index]}`}}></Dot>
        </Dots>
        </Wrapper>
    )
    
}

export default Carousel;

const Dots = styled.div`
    display:flex;
    flex-direction:row;
    width:fit-content;
`
const Dot = styled.div`
    height:6px;
    width:6px;
    border-radius: 3px;
    margin:0 4px;
`
const Button = styled.button`
    background-color:transparent;
    border: 0;
    width:34px;
    height:34px;
`
const Wrapper = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
    height:fit-content;
    width:fit-content;
`
const Image = styled.div`
    display : flex;
    flex-direction:row;
    justfiy-content:center;
    align-items:center;
`

const Text = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
    padding:5px;
    
`
const Heading = styled.div`
    font-size:24px;
    font-family: sans-serif;
    color:#000000DE;
`

const Content = styled.div`
    font-size:14px;
    font-family: sans-serif;
    color:#000000DE;
    height:40px;
    width:330px;
    text-align:center;
    padding:5px;


`



