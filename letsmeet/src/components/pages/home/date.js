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
        if(mins%10===mins)
        {
            mins = '0'+mins;
        }
        var finalTime = `${hours}:${mins}`;
        return finalTime;
    }

    
    


    var finalDateTime = `${refreshTime()} · ${refreshDate()}`;

    const [val, setDate] = useState(finalDateTime);

    function updateDate(){
        const newDate = `${refreshTime()} · ${refreshDate()}`;
        setDate(newDate);

    }
    
    
    setInterval(updateDate,1000);
    return (<Font>{val}</Font> )
}

export default useD;
const Font = styled.p`
    font-size:1.125rem;
    font-family:sans-serif;
    color:#5F6368;`
