import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function TheSecondDream() {
	return (
		<div className='poem TheSecondDream setPenelope'>
		<h2>TheSecondDream</h2>
		<p>
			<br/>
			<div class="indent9"></div>.<br/>
			<div class="indent8"></div>.<br/>
			<div class="indent6"></div>.<br/>
			<br/>
			<div class="indent3"></div>.<br/>
			<div class="indent"></div>.<br/>
			.<br/>
			slipping to me past a gate of<br/>
			horn<div class="indent">&emsp;</div>or<div class="indent">&emsp;</div>ivory<br/>
			<div class="indent6"></div>:<br/>
			<br/>
			I am<br/>
			standing<div class="indent"></div>,<br/>
			feeding<br/>
			my<br/>
			    flock of geese<br/>
			<div class="indent"></div>s<div class="indent"></div>c               <br/>
			<div class="indent4"></div>a<br/>
			t<br/>
			&ensp;t<div class="indent">&ensp;</div>e<div class="indent">&ensp;</div>r<br/>
			<div class="indent3"></div>e<br/>
			<div class="indent4">&emsp;</div>d<br/>
			around the yard<br/>
			<br/>
			<br/>
			<div class="indent4"></div>to the gate<br/>
			<div class="indent3"></div>up<br/>
			waddling <br/>
			<br/>
			to collect their daily grain <br/>
			<div class="indent6"></div>.<br/>
			I<br/>
			&emsp;d e l i g h t<br/>
			<div class="indent3"></div>in watching<br/>
			<div class="indent3"></div>them. <br/>
			<br/>
			S<br/>
			&ensp;w<br/>
			&ensp;&ensp;o<br/>
			&ensp;&ensp;&ensp;o<div class="indent3"></div>down<br/>
			&ensp;&ensp;&ensp;&ensp;p                             from<br/>
			&ensp;&ensp;&ensp;&ensp;&ensp;i                              the<br/>
			&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;n                           hills<br/>
			&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;g                                ,<br/>
			<br/>
			a blade-keen eagle<br/>
			      breaks<br/>
			      their<br/>
			      necks,<br/>
			<br/>
			leaves me            to weep,<br/>
			        alone<br/>
			<br/>
			    . <br/>
			  away<br/>
			soars<br/>
			and <br/>
			 <br/>
			 <br/>
			    My maids<br/>
			    find me like this  bent<br/>
			           ,         .<br/>
			<br/>
			Circling<br/>
			back<br/>
			to me,<br/>
			the eagle<br/>
			<br/>
			perches<br/>
			<br/>
			and somehow speaks:<br/>
			"<br/>
			Be comforted<br/>
			<br/>
			This dream will<br/>
			be a happy reality<br/>
			<br/>
			These bodies are<br/>
			your suitors<br/>
			<br/>
			I am your husband<br/>
			restless<br/>
			revenant<br/>
			ready<br/>
			    "<br/>
			.<br/>
			.<br/>
			      .<br/>
			      <br/>
			
			<blockquote>indented text</blockquote>

			<div class="indent"></div>

			<TextLink link={'/lastpoeminthisthread'} class={"text-button text-button-character"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-character"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/nextpoeminthisthread'} class={"text-button text-button-character"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TheSecondDream