import React, {useState} from 'react'

function CycleSpan(props) {
    let [count, setCount] = useState(0);

    let handleClick = () => {
        let entrySize = props.entries.length ;
        let divisor = count % entrySize +1;
        if(divisor === entrySize){
            divisor=0
        }
        setCount(divisor);
    };

    return (
        <span className={"cycleSpan"} onClick={handleClick}>{props.entries[count]}</span>
    )
}

export default CycleSpan