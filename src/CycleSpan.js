import React, {useState} from 'react'

function CycleSpan(props) {
    let [count, setCount] = useState(0);
    let handleClick = () => {
        let entrySize = props.entries.length ;
        let divisor = count % entrySize +1;
        if(divisor === 3){
            divisor=0
        }
        setCount(divisor);
    };

    return (
        <span onClick={handleClick}>{props.entries[count]}</span>
    )
}

export default CycleSpan