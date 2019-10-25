import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function TheThirdDream() {
	return (
		<div className='poem TheThirdDream setPenelope'>
		<h2>The Third Dream</h2>
		<p>
			<br/>
			<div class="indent6"></div>.<br/>
			<div class="indent5">&ensp;</div>.<br/>
			<div class="indent4"></div>.<br/>
			<br/>
			<div class="indent2"></div>.<br/>
			<div class="indent"></div>.<br/>
			&emsp;.<br/>
			<br/>
			.<br/>
			.<br/>
			.<br/>
			As if before Ilios<br/>
			<div class="indent2">&emsp;</div>evil Ilios<br/>
			he sleeps unmarked in my arms<br/>
			<div class="indent7"></div>.<br/>
			<div class="indent6"></div>.<br/>
			<div class="indent5"></div>.<br/>
			<div class="indent"></div>time has only<br/>
			left its trace<br/>
			in the quiet smiles<br/>
			around his eyes   .<br/>
			<div class="indent3">&emsp;&ensp;</div>.<br/>
			<div class="indent4">&emsp;</div>.<br/>
			<div class="indent5"></div>warm<br/>
			<div class="indent3"></div>and morning-sour<br/>
			<div class="indent">&emsp;</div>his breath flies<br/>
			across my skin<br/>
			again<br/>
			<div class="indent"></div>.<br/>
			&emsp;.<br/>
			.<br/>
			<br/>
			as though recalling something<br/>
			he startles from sleep<br/>
			turns in my arms<br/>
			and blinks gently awake<br/>
			<br/>
			"<br/>
			<div className='blockquote'>
			Were you<br/>
			dreaming too?<br/>
			<br/>
			About what?</div>
			<div class="indent4">&emsp;</div>"<br/>
			<div class="indent2"></div>.<br/>
			<div class="indent2"></div>.<br/>
			<div class="indent2"></div>.<br/>
			<br/>
			&emsp;A husky rumble<br/>
			<br/>
			This was all.<br/>
			<br/>
			Dawn decided<br/>
			it must be enough<br/>
			and , <br/>
			<div class="indent">&emsp;</div>in her tender mercies ,<br/>
			<br/>
			revoked him.<br/>
			<br/>
			
			

			<TextLink link={'/theseconddream'} class={"text-button text-button-penelope"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-penelope"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/odysseusproof'} class={"text-button text-button-penelope"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TheThirdDream