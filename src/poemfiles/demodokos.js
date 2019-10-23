import React from 'react'
import CycleSpan from "../components/CycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

function Demodokos() {
	return (
		<div className='poem demodokos setOdysseus'>
		<h2>Odysseus Listens to Demodokos</h2>
		<p>
			What a bard<br/>
			<br/>
			He tells stories like I do<br/>
			<br/>
			like<br/>
			<br/>
			he was there<br/>
			<br/>
			and I am there too<br/>
			again<br/>
			I hear the war<br/>
			everywhere<br/>
			again<br/>
			fire gorging itself<br/>
			on stone<br/>
			bronze<br/>
			and the blood it weeps<br/>
			into the fire<br/>
			the sting<br/>
			in my nose<br/>
			at burning <CycleSpan entries={["iron","bronze","blood"]}/><br/>
			ribs cracking wetly<br/>
			underfoot<br/>
			screaming<br/>
			metal<br/>
			on metal<br/>
			again<br/>
			and the wrath<br/>
			of the crunching grinding dirt at my heels<br/>
			of the bronze glaring surveillance above<br/>
			of the wretched divine scream<br/>
			in my ears<br/>
			in my skull<br/>
			that I can only assume<br/>
			is disapproval<br/>
			but <CycleSpan entries={["prayer","repentance","sacrifice"]}/><br/>
			doesn't<br/>
			stop it<br/>
			stops none<br/>
			of<br/>
			it<br/>
			continues<br/>
			tomorrow<br/>
			and tomorrow<br/>
			and tomorrow<br/>
			and ten years of tomorrows<br/>
			without those drugs<br/>
			that numb men's sorrows<br/>
			weeping<br/>
			has never relieved it<br/>
			before<br/>
			<br/>
			now<br/>
			<br/>
			the bard<br/>
			silences<br/>
			the war<br/>
			<br/>
			I don't choose to weep<br/>
			it happens anyway<br/>
			<br/>
			because I know the past<br/>
			does not like<br/>
			being muted<br/>
			<br/>
			I will hear it all again<br/>
			tonight<br/>
			<br/>
			
			<TextLink link={'/nausikaa'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/polyphemos'} class={"text-button text-button-odysseus"} text={"→"}/><br/>

		</p>
		<ScrollToTop/>
		<NavBar/>
		</div>
	)
}

export default Demodokos