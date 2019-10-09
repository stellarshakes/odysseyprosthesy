import React from 'react'
import CycleSpan from "../CycleSpan";


function Phemios() {
    return (
        <div className='phemios setPenelope'>
            <h2>Penelope Listens to Phemios</h2>
            <p>
                He will not stop<br/>
                <br/>
                He will wring false memories out of me<br/>
                of the war<br/>
                reciting all these songs<br/>
                <CycleSpan entries={['of coarse hair plumes',
                    'of piercing bronze',
                    'of acrid bones']}/><br/>
                all the same<br/>
                <br/>
                I veil my face<br/>
                <br/>
                I do not mean to weep
                <blockquote>shedding tears over skulls that never knew me<br/>
                    at rest, now that everyone has moved out</blockquote>
                it happens anyway<br/>
                <br/>
                Only dandelion roots can move them now<br/>
                but he <CycleSpan entries={['gilds them', 'spreads them', 'cakes them']}/> with epic anyway<br/>
                <br/>
                After twenty years of such lullabies<br/>
                I know<br/>
                my bedroom door<br/>
                is too thin to bar them<br/>
                <br/>
                I want quiet conference<br/>
                with last night and its dreams<br/>
                <br/>
                but I will not find it here<br/>
            </p>
        </div>
    )
}

export default Phemios