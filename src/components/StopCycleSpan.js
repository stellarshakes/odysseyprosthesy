import React, {useState, useEffect} from 'react'

function StopCycleSpan(props) {
    let [count, setCount] = useState(0);
    let [max, setMax] = useState(0);

    let handleClick = () => {
        (count >= max) ? setCount(max) : setCount(count+1)
    };

    useEffect(() => {
        setMax(props.entries.length-1)
    },[props.entries]);

    return (
        <span className={props.className} onClick={handleClick}>{props.entries[count]}</span>
    )
}

export default StopCycleSpan