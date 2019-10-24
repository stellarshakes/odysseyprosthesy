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
			<td className='bksixten threado'>
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
					<br/>			
					After<br/>
					<CycleSpan entries={["enduring","repeating","reliving"]}/><br/>
					every<br/>
					encounter<br/>
					with<br/>
					<br/>
					<TextLink link={'/polyphemos'} class={"text-button text-button-odysseus"} text={"man-eaters"}/><br/>
					<br/>
					<TextLink link={'/aeaea'} class={"text-button text-button-odysseus"} text={"magic"}/><br/>
					<br/>
				</div>
			</td>
			<td>
			</td>
		</tr>
		<tr>
			<td className='bkelevenfourteen threadp'>

			</td>
			<td className='bkelevenfourteen threado'>
				<div className='threadotext'>
					<TextLink link={'/teiresiasprophecy'} class={"text-button text-button-odysseus"} text={"duty"}/><br/>
					<br/>
					<TextLink link={'/sirens'} class={"text-button text-button-odysseus"} text={"temptation"}/><br/>
					<br/>
					commuting<br/>
					between<br/>
					a <TextLink link={'/scylla'} class={"text-button text-button-odysseus"} text={"rock"}/><br/>
					and a <TextLink link={'/charybdis'} class={"text-button text-button-odysseus"} text={"hard place"}/><br/>
					<br/>
					<br/>
					the gods<br/>
					and the Phaeakians<br/>
					granted<br/>
					my<br/>
					wish<br/>
					<br/>
					Home<br/>
					<br/>
					To Ithaki<br/>
					<br/>
					At last<br/>
					after<br/>
					an<br/>
					eternity<br/>
					of<br/>
					waiting<br/>
					returned to my native land!<br/>
					<br/>
					Strategist Athena<br/>
					welcomed me<br/>
					advised me<br/>
					disguised me<br/>
					<br/>
					and<br/>
					in the form of a beggar<br/>
					I made my way to<br/>
					Eumaeus' hut<br/>
					<br/>
					our faithful<br/>
					old<br/>
					swineherd<br/>
					told me <TextLink link={'/ctimene'} class={"text-button text-button-odysseus"} text={"stories"}/><br/>
					of my family<br/>
					and the wretched state<br/>
					of my home<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bkelevenfourteen threadt'>
				<div className='threadttext'>
					<br/>
					A god<br/>
					guides<br/>
					me<br/>
					into<br/>
					a<br/>
					safe<br/>
					port<br/>
					<br/>
					<br/>
					I did not learn<br/>
					what I had set out<br/>
					to learn<br/>
					<br/>
					<br/>
					<br/>
					my father is still missing<br/>
					<br/>
					my mother needs me now<br/>
					<br/>
					Perhaps<br/>
					I should be<br/>
					at home<br/>
					<br/>
					<br/>
					First<br/>
					I will stop<br/>
					by Eumaeus' house<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					he has been<br/>
					enduringly<br/>
					loyal<br/>
					to our family<br/>
					<br/>
					even<br/>
					especially<br/>
					under the abuse<br/>
					of those<br/>
					suitor-tyrants<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfifteen threadp'>
				<div className='threadptext'>
					
				</div>
			</td>
			<td className='bkfifteen threado threadt intersection' colspan='2'>
				<div>
					The swineherd<div class="indent10"></div>Perhaps<br/>
					<div class="indent2"></div>was<div class="indent10"></div><div class="indent"></div>I should have<br/>
					<div class="indent"></div>a gracious host<div class="indent9"></div>visited sooner<br/>
					<br/>
					he<div class="indent10"></div><br/>
					<div class="indent"></div>shared<div class="indent8"></div>This is not<br/>
					<div class="indent"></div>his food<div class="indent7"></div>the best time<br/>
					<br/>
					<br/>
					<div class="indent"></div>even<div class="indent7"></div>he<br/>
					<div class="indent"></div>especially<div class="indent6"></div>is<div class="indent"></div><br/>
					<div class="indent"></div>when<div class="indent4"></div>entertaining<br/>
					<TextLink link={'/odysseusmeetshisson'} class={"text-button"} text={"an unexpected guest"}/><br/>
					<div class="indent4"></div>appeared<br/>

				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfifteen threadt' colspan='3'>
				<div className='threadttext'>
					<div class="indent5"></div>but<br/>
					<div class="indent2"></div>he is<br/>
					accommodating<br/>
					<br/>
					<br/>
					It's getting dark<div class="indent4"></div><br/>
					<div class="indent4"></div><br/>
					and he offers me<div class="indent8"></div><br/>
					a place<div class="indent10"></div><br/>
					to spend<div class="indent10"></div><div class="indent2"></div><br/>
					the night<div class="indent10"></div><div class="indent4"></div><br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bksixteen threadt'>
				<div className='threadttext'>
					<div class="indent7"></div>Perhaps<br/>
					<div class="indent6"></div>I should stay<br/>
					<br/>
					<br/>
					In the clear light of the morning<br/>
					the guest<br/>
					proves<br/>
					that<br/>
					he<br/>
					is<br/>
					Odysseus<br/>
					<br/>
					It's my father<br/>
					who welcomes<br/>
					me<br/>
					home<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					and<br/>
					who<br/>
					lets<br/>
					me<br/>
					conspire<br/>
					with him<br/>
					many ways<br/>
					of getting<br/>
					our home<br/>
					back<br/>
					<br/>
				</div>
			</td>
			<td className='bksixteen threadp'>
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
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					The<br/>
					air<br/>
					has<br/>
					been<br/>
					thick<br/>
					with<br/>
					<CycleSpan entries={["gods","dreams","flying rumours"]}/><br/>
					recently<br/>
					<br/>
				</div>
			</td>
			<td className='bksixteen threado'>
				<div className='threadotext'>
					<br/>
					<br/>
					After<br/>
					an eternity<br/>
					of waiting<br/>
					<br/>
					Eumaeus left<br/>
					<br/>
					I shed my disguise<br/>
					and<br/>
					when<br/>
					Telemachos<br/>
					<br/>
					my son<br/>
					<br/>
					knew<br/>
					me<br/>
					<br/>
					I wept<br/>
					harder<br/>
					than<br/>
					when Ilios<br/>
					plucked me from him<br/>
					<br/>
					and there<br/>
					we devised<br/>
					a plan<br/>
					to gather support<br/>
					to reclaim<br/>
					our home<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkseventeen threadt'>
				<div className='threadttext'>
					<br/>
					The god<br/>
					that lives<br/>
					in my ear<br/>
					can retire<br/>
					<br/>
					I know<br/>
					what<br/>
					to do<br/>
					<br/>
					<br/>
					I<br/>
					know<br/>
					Ithaki<br/>
					<br/>
					its<br/>
					men<br/>
				</div>
			</td>
			<td className='bkseventeen threado threadp intersection' colspan='2'>
				<div>
					<div class="indent"></div>I<div class="indent10"></div><div class="indent2"></div>But<br/>
					<div class="indent"></div>cannot<div class="indent9"></div>there was<br/>
					believe<div class="indent6"></div>one more<br/>
					<div class="indent"></div>that<div class="indent3"></div>important<br/>
					farewell<br/>
					to<div class="indent3"></div>will<br/>
					undo<div class="indent5"></div>be<br/>
					<div class="indent8"></div>the<br/>
					Eumaeus<div class="indent7"></div>last<br/>
					escorted me<div class="indent7"></div>time<br/>
					in beggar's rags<div class="indent8"></div>I<div class="indent"></div><br/>
					once again<div class="indent9"></div>hear<div class="indent"></div><br/>
					<div class="indent10"></div><div class="indent"></div>his<br/>
					across the town<div class="indent9"></div>voice<div class="indent"></div><br/>
					past my old dog<div class="indent10"></div><div class="indent3"></div><br/>
					through the gates<div class="indent10"></div><div class="indent3"></div><br/>
					<br/>
				</div>
			</td>
		</tr>

	</table>
			

		<br/>
		<br/>
		<br/>
		Template for 3-cell rows<br/>
		TEST 2
		

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