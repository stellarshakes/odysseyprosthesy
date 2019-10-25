import React from 'react'
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

/*still needs editing for space*/

function TheFirstDream() {
	return (
		<div className='poem thefirstdream setPenelope'>
		<h2>The First Dream</h2>
		<p>
			<div class="indent2"></div>.<br/>
			<div class="indent"></div>.<br/>
			.<br/>
			<br/>
			A&emsp;w r a i t h&emsp;manifests<br/>
			and startles me <br/>
			<div class="indent3">&ensp;out of my</div><br/>
			<div class="indent2"></div>tears<br/>
			<br/>
			I believe I recognise it.<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;her.<br/>
			<br/>
			It is<br/>
			<div class="indent2">my sister</div><br/>
			<div class="indent"></div>!<br/>
			<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iphthime<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;!<br/>
			<br/>
			<div class="indent">Iphthime swears</div><br/>
			<div class="indent5"></div>:<br/>
			my son will return <br/>
			.<br/>
			.<br/>
			.<br/>
			safe !<br/>
			<br/>
			Athena escorts him.<br/>
			<br/>
			But she gives no news on<br/>
			<div class="indent">&emsp;</div>Odysseus<br/>
			<div class="indent2">&emsp;</div>,<br/>
			<br/>
			neither<br/>
			good<div class="indent">&emsp;</div>nor<div class="indent">&emsp;</div>bad.<br/>
			<br/>
			She says<br/>
			<div class="indent2"></div>there is no<br/>
			<div class="indent">&emsp;&ensp;</div>use speaking<br/>
			<br/>
			<div class="indent">&emsp;&ensp;</div>empty words .<br/>
			<div class="indent5"></div>.<br/>
			<div class="indent6"></div>.<br/>
			<br/>
			<TextLink link={'/thesuitorsconference'} class={"text-button text-button-penelope"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-penelope"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/farewell'} class={"text-button text-button-penelope"} text={"→"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TheFirstDream