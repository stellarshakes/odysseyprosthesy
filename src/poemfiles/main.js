import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";

function Main() {
	return (
		<div className='main poemContainer'>
		<table className='allthreads'>
			<tr>
				<td className='bkone threadt'>
					<div className='threadttext'>
					All the war heroes<br/>
					from Ilios<br/>
					returned<br/>
					ten<br/>
					years<br/>
					ago<br/>
					<br/>
					except<br/>
					my father<br/>
					<br/>
					<br/>
					We received<br/>
					guests<br/>
					in his stead<br/>
					<br/>
					arrogant evil men<br/>
					who gorge themselves<br/>
					at our expense<br/>
					<br/>
					eating up our home<br/>
					harassing my mother<br/>
					the servants<br/>
					the bard<br/>
					and<br/>
					bullying<br/>
					me<br/>
					<br/>
					<br/>
					ten <TextLink link={'/despair'} class={"text-button text-button-telemachos"} text={"insufferable"}/> years now<br/>
					</div>
				</td>
				<td className='bkone threadp'>
					<div className='threadptext'>
					It's<br/>
					a<br/>
					long<br/>
					twenty<br/>
					years<br/>
					<br/>
					that<br/>
					teaches<br/>
					someone<br/>
					<br/>
					how<br/>
					to<br/>
					pass<br/>
					the<br/>
					time<br/>
					<br/>
					<br/>
					<br/>
					I<br/>
					have<br/>
					our<br/>
					talented<br/>
					<TextLink link={'/phemios'} class={"text-button text-button-penelope"} text={"bard"}/><br/>
					<br/>
					and<br/>
					I<br/>
					have<br/>
					my<br/>
					<TextLink link={'/penelopesshroud'} class={"text-button text-button-penelope"} text={"weaving"}/><br/>
					</div>
				</td>
				<td className='bkone threado'>
					<div className='threadotext'>
					<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
					My<br/>
					story<br/>
					starts<br/>
					with<br/>
					<br/>
					<TextLink link={'/theveil'} class={"text-button text-button-odysseus"} text={"gods"}/><br/>
					<br/>
					<TextLink link={'/halithersesprophecy'} class={"text-button text-button-odysseus"} text={"prophecies"}/><br/>
					<br/>
					all<br/>
					that<br/>
					marionette meddling<br/>
					</div>
				</td>
			</tr>
			<tr>
				<td className='bktwo threadt'>
					<div className='threadttext'>
					<br/>
					<br/>
					But<br/>
					a god<br/>
					has pierced<br/>
					my mind<br/>
					like a war cry<br/>
					<br/>
					<br/>
					I can<br/>
					do<br/>
					something<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I will<br/>
					leave<br/>
					<br/>
					<TextLink link={'/telemachosleaves'} class={"text-button text-button-telemachos"} text={"tonight"}/><br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I will<br/>
					chase<br/>
					down<br/>
					my father<br/>
					or<br/>
					at least<br/>
					news<br/>
					of his<br/>
					whereabouts<br/>
					<br/>
					<br/>
					</div>
				</td>
				<td className='bktwo threadp'>
					<div className='threadptext'>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I<br/>
					miss<br/>
					my<br/>
					best<br/>
					friend<br/>
					<br/>
					<br/>
					Even<br/>
					Telemachos<br/>
					has<br/>
					left<br/>
					<br/>
					and taken<br/>
					all<br/>
					his<br/>
					good<br/>
					company<br/>
					with him<br/>
					<br/>
					a child<br/>
					of nineteen<br/>
					<br/>
					on<br/>
					the<br/>
					whimsical command<br/>
					of<br/>
					some god<br/>
					</div>
				</td>
				<td className='bktwo threado'>
					<div className='threadotext'>
					<br/>
					<br/>
					but<br/>
					I<br/>
					started<br/>
					long<br/>
					before<br/>
					then<br/>
					<br/>
					<br/>
					You<br/>
					know<br/>
					my<br/>
					name<br/>
					<br/>
					my<br/>
					story<br/>
					<br/>
					my<br/>
					<TextLink link={'/odysseus'} class={"text-button text-button-odysseus"} text={"mission"}/><br/>
					<br/>
					<br/>
					I<br/>
					had<br/>
					to<br/>
					leave<br/>
					my<br/>
					infant<br/>
					<TextLink link={'/babytelemachos'} class={"text-button text-button-odysseus"} text={"son"}/><br/>
					behind<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					</div>
				</td>
			</tr>
			<tr>
				<td className='bkthree threadt'>
					<div className='threadttext'>
					My<br/>
					quest<br/>
					will<br/>
					bring<br/>
					me<br/>
					<br/>
					<br/>
					glory<br/>
					<br/>
					respect<br/>
					<br/>
					maybe<br/>
					even<br/>
					my dad<br/>
					</div>
				</td>
				<td className='bkthree threadp'>
					<div className='threadptext'>
					<br/>
					<br/>
					It's<br/>
					just<br/>
					<TextLink link={'/penelope'} class={"text-button text-button-penelope"} text={"me"}/><br/>
					here<br/>
					now<br/>
					<br/>
					well<br/>
					<br/>
					and<br/>
					those<br/>
					suitors<br/>
					such as they are<br/>
					</div>
				</td>
				<td className='bkthree threado'>
					<br/>
				</td>
			</tr>
			<tr>
			<td className='bkfour threadt threadp intersection' colspan='2'>
				<div>
					<br/>
					<div class="indent8"> </div><div class="indent5"> </div><div className='threadptext'>There is</div><br/>
					<div class="indent2"> </div>I can<div class="indent8"> </div><div class="indent2"> </div><div className='threadptext'>no privacy</div><br/>
					<div class="indent2"> </div>quest<div class="indent8"> </div><div class="indent2"> </div><div className='threadptext'>in solitude</div><br/>
					as<div class="indent8"> </div><div class="indent2"> </div><br/>
					<div class="indent2"> </div>far<div class="indent8"> </div><div class="indent"> </div>The<div class="indent"> </div><br/>
					<div class="indent3"> </div>as<div class="indent8"> </div>rest<div class="indent2"> </div><br/>
					<div class="indent8"> </div>of<br/>
					sandy<div class="indent5"> </div>my<br/>
					Pylos<div class="indent3"> </div>family<br/>
					<br/>
					and<div class="indent2"> </div>is&emsp;<br/>
					<TextLink link={'/helen'} class={"text-button"} text={"distant"}/><br/>
					<div class="indent3"> </div>Sparta<br/>
					and<div class="indent3"> </div><br/>
					those<div class="indent4"> </div><br/>
					that<div class="indent6"> </div><br/>
					remain<div class="indent6"> </div><br/>
					<br/>
					I tell myself<div class="indent5"> </div><br/>
					<br/>
					will<div class="indent4"> </div>My<br/>
					<div class="indent"> </div>&emsp;not<div class="indent2"> </div>triumphant<br/>
					<TextLink link={'/thesuitorsconference'} class={"text-button"} text={"return"}/><br/>
					<br/>
					will<div class="indent5"> </div><br/>
					<div class="indent3"> </div>bring<div class="indent7"> </div>To the gods<br/>
					<div class="indent2"> </div>my<div class="indent9"> </div>I<div class="indent"> </div><br/>
					<div class="indent"> </div>
					<div class='threadttext'><CycleSpan entries={["poor","dear","lonely"]}/></div><div class="indent9"> </div>am<br/>
					<div class="indent"> </div>mother<div class="indent10"> </div>a<div class="indent"> </div><br/>
					comfort<div class="indent10"> </div>study<br/>
					<div class="indent10"> </div><div class="indent2"> </div>in<br/>
					<div class="indent10"> </div><div class="indent2"> </div>solitude<br/>
				</div>
			</td>
			<td className='bkfour threado'>
				<div className='threadotext'>
					
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfour threadt'>
				<div className='threadttext'>
					Lion-hearted<br/>
					Odysseus<br/>
					need<br/>
					only<br/>
					wait<br/>
					<br/>
					<br/>
					I<br/>
					am<br/>
					on<br/>
					my<br/>
					way<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bkfour threadp'>
				<div className='threadptext'>
					<br/>				
					ripe<br/>
					for<br/>
					<TextLink link={'/thefirstdream'} class={"text-button text-button-penelope"} text={"dreaming"}/><br/>
					<br/>
					There is<br/>
					no relief<br/>
					in sleep<br/>
					<br/>
					Odysseus<br/>
					has to<br/>
					return<br/>
					<br/>
					he has to<br/>
				</div>
			</td>
			<td className='bkfour threado'>
				<div className='threadotext'>
					
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfive threadt'>
				<div className='threadttext'>
				/
				</div>
			</td>
			<td className='bkfive threadp threado intersection' colspan='2'>
				<div>
					<br/>
					Widowhood<div class="indent10"></div><div class="indent"></div><br/>
					is not for me<div class="indent9"></div><br/>
					<br/>
					I<div class="indent9"></div><br/>
					miss<div class="indent8"></div>and<br/>
					his<div class="indent8"></div>my<br/>
					<div class="indent"></div>
					<div class='threadptext'>
					<CycleSpan entries={["tempered","balsamic","bronze-swept"]}/></div>
					<div class="indent6"></div>
					<div class='threadotext'>
					<CycleSpan entries={["dear","clever","extraordinary"]}/>&emsp;</div><br/>
					voice<div class="indent6"></div>wife<br/>
					<br/>
					even<div class="indent4"></div>with<br/>
					thick<div class="indent3"></div>just<br/>
					with<div class="indent2"></div>clumsy<br/>
					<TextLink link={'/farewell'} class={"text-button"} text={"farewells"}/><br/>
					<br/>
					<div class="indent3"></div>I miss<br/>
					<div class="indent6"></div>my best friend<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td>
			</td>
			<td className='bksixfourteen threado'>
				<div className='threadotext'>
					The war<br/>
					lasted ten years<br/>
					<br/>
					Ogygia<br/>
					nearly as long<br/>
					<br/>
					<br/>
					The <TextLink link={'/calypso'} class={"text-button text-button-odysseus"} text={"missive"}/><br/>
					came<br/>
					eventually<br/>
					<br/>
					and<br/>
					I was<br/>
					<CycleSpan entries={["finally","suspiciously","impossibly"]}/><br/>
					free<br/>
					<br/>
					<br/>
					<CycleSpan entries={["Thanks to Athena","Thanks to Ino","Despite Poseidon"]}/><br/>
					I washed up<br/>
					on Phaeakia<br/>
					<br/>
					cloaked<br/>
					the last embers<br/>
					of my life<br/>
					under a tree<br/>
					<br/>
					<br/>
					until<br/>
					a<br/>
					<TextLink link={'/nausikaa'} class={"text-button text-button-odysseus"} text={"princess"}/><br/>
					woke<br/>
					me<br/>
					<br/>
					clothed me<br/>
					<br/>
					guided me<br/>
					all<br/>
					the<br/>
					way<br/>
					back<br/>
					to her home<br/>
					<br/>
					<br/>
					Her parents<br/>
					were<br/>
					gracious hosts<br/>
					<br/>
					but<br/>
					I could not<br/>
					stomach<br/>
					all the fine things<br/>
					<br/>
					mellow wine<br/>
					<TextLink link={'/demodokos'} class={"text-button text-button-odysseus"} text={"lyresong"}/><br/>
					races and dances<br/>
					<br/>
					that<br/>
					they had<br/>
					to offer<br/>
					<br/>
					<br/>
					I was<br/>
					<CycleSpan entries={["still","only","always"]}/><br/>
					hungry<br/>
					for Ithaki<br/>
					<br/>
				</div>
			</td>
			<td>
			</td>
		</tr>

	</table>
			

		Template for 3-cell rows

		<tr>
			<td className='bknumber threadinitial'>
				<div className='threaditext'>
					Text
				</div>
			</td>
			<td className='bknumber threadinitial'>
				<div className='threaditext'>
					Text
				</div>
			</td>
			<td className='bknumber threadinitial'>
				<div className='threaditext'>
					Text
				</div>
			</td>
		</tr>

		<p>

			<br/>
			<TextLink link={'/subpoem'} class={"text-button text-button-character"} text={"verse"}/>
			
		</p>
		</div>
	)
}

export default Main