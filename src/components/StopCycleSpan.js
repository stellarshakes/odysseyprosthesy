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

    let findClassName = () => {
        if("lastClassName" in props){
            if (count === max) {
                return props.lastClassName
            }
        }
        return props.className
    };

    return (
        <span className={findClassName()} onClick={handleClick}>{props.entries[count]}</span>
    )
}

export default StopCycleSpan