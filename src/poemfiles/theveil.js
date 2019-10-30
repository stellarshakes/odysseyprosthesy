import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function TheVeil() {
    return (
        <div className='poem setOdysseus'>
            <h2>The Veil</h2>
            <p>
                Father, Odysseus lies<br/>
                concealed at the end of the world<br/>
                <br/>
                shrouded<br/>
                seeking to live again<br/>
                <br/>
                But in the dark at the dawn of the world<br/>
                the archaism of the gilt prison<br/>
                Ogygia<br/>
                the Veil clings to him
				<div className="blockquote">the <span> </span>
                    <StopCycleSpan entries={[
                        "various-minded", "resourceful", "complicated", "ingenious", "polytropic"
                    ]} className={"cycleSpan"} lastClassName={"finalCycleSpan"}/> peripatetic<br/>
					
                    <CycleSpan entries={["two decades in tears",
                        "two decades in solitude",
                        "facing five more decades of the last two decades"]}/>

                </div>
                like night clings to shadows<br/>
                <br/>
                Father, extinguish the darkness<br/>
                send him uncovered to<br/>
                <CycleSpan entries={["Penelope, who kneels for blind gods",
                    "Telemachos, whose father is absence",
                    "Argos, who lives with wretched resolution"]}/><br/>
                <br/>
                Ithaki lacks its brightest star<br/>
                <br/>
                <i>The Daughter of Endurance will give in:<br/>
                    Odysseus' voyage must begin.<br/></i>
                <br/>
                <TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
                <div class="indent"> </div> 
                <TextLink link={'/halithersesprophecy'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
                <br/>
            </p>
            <ScrollToTop/>
        </div>
    )
}

export default TheVeil