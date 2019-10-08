import React from 'react'
import CycleSpan from "../CycleSpan";
import {Link} from 'react-router-dom'

function TheVeil() {
	return (
		<div>
		<p>
			Father, Odysseus lies
			concealed at the end of the world
 
			Shrouded
			seeking to live again

			But in the dark at the dawn of the world
			the archaism of the gilt prison
			Ogygia
			the Veil clings to him
			the <CycleSpan entries={["various-minded","resourceful","complicated","ingenious","polytropic"]}/> peripatetic
			<CycleSpan entries={["two decades in tears",
			"two decades in solitude",
			"facing five more decades of the last two decades"]}/>
			like night clings to shadows
			
			Father, extinguish the darkness
			send him uncovered to
			<CycleSpan entries={["Penelope, who kneels to blind gods",
			"Telemachos, whose father is absence",
			"Argos, who lives with wretched resolution"]}/>
			
			Ithaki lacks its brightest star
			
			<i>The Daughter of Endurance will give in: 
			Odysseus' voyage must begin.</i> 
		</p>
		</div>
	)
}

export default TheVeil