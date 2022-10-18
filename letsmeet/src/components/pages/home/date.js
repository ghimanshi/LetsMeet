import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const useD = () =>{

    const refreshDate = () =>{
    var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var month = ['Jan','Feb','March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct','Nov','Dec']
    var dateDay = new Date().getDate();
    var dateWeekDay = week[ new Date().getDay()];
    var dateMonth = month[new Date().getMonth()];
    var finalDate = `${dateWeekDay}, ${dateDay} ${dateMonth}`;
    return finalDate;
    }

    const refreshTime = () =>{
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var seconds = new Date().getSeconds();
        var finalTime = `${hours}:${mins}:${seconds}`;
        return finalTime;
    }

    
    


    var finalDateTime = `${refreshTime()} · ${refreshDate()}`;

    var [val, setDate] = React.useState(finalDateTime);

    React.useEffect=(()=>{
        try{setTimeout(
        ()=>{setTimeout(refreshDate,1000);
        setTimeout(refreshTime,1000);
        finalDateTime = `${refreshTime()} · ${refreshDate()}`;
        setDate((val) => val=finalDateTime)},1000);}
        catch(err){
            console.log(err);
        }
    });
    
    
    
    return (<Font>{val}</Font> )
}

export default useD;
const Font = styled.p`
    font-size:1.125rem;
    font-family:sans-serif;
    color:#5F6368;`
