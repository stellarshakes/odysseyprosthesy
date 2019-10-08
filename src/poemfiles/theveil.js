import React from 'react'
import CycleSpan from "../CycleSpan";
import {Link} from 'react-router-dom'

function TheVeil() {
	return (
		<div className='theveil' className='setOdysseus'>
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
			<blockquote>the <CycleSpan entries={["various-minded","resourceful","complicated","ingenious","polytropic"]}/> peripatetic<br/>
			<CycleSpan entries={["two decades in tears",
			"two decades in solitude",
			"facing five more decades of the last two decades"]}/></blockquote>
			like night clings to shadows<br/>
			<br/>
			Father, extinguish the darkness<br/>
			send him uncovered to<br/>
			<CycleSpan entries={["Penelope, who kneels before blind gods",
			"Telemachos, whose father is absence",
			"Argos, who lives with wretched resolution"]}/><br/>
			<br/>
			Ithaki lacks its brightest star<br/>
			<br/>
			<i>The Daughter of Endurance will give in:<br/>
			Odysseus' voyage must begin.<br/></i> 
			<br/>
			<Link to={"/phemios"}>
                →
            </Link>
		</p>
		</div>
	)
}

export default TheVeil