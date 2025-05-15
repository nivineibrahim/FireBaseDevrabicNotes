/*
abl ma est3ml l context lezem faker
shu bdna ne3ml ne7na b2lb l application:bdna ne3ref mn howe l sha5es le tasalna fe 2e5r shy
w hyda l sha5es fene e3rfo mn 5elel property named name yale mawjode b2lb l userCard component yale mest3mlena
bl contacts page wel contacts.jsx page mawjode b2lb(3m 3ayetla) bl App.jsx so 3ende kaza mar7ale badna nemro2 feha kerml nmare2
hyde l userCard lal Application te3olna kela App.jsx ma fene e3mala aked mn 5elel l props bade mare2 l name b kaza component
userCard->contacts->App fe ktr mare7el fa fena ne3mla mn 5elel context:
1.awal shy be5l2 l context b2lb file la7al
2.bdna nerj3 nest5dm l hook le esma useContext be7ayala matra7 ana bade jeeb aw est5dm l name
*/
//1.awal shy mne3ml import lal createContext
import {createContext} from "react";
//2.tene shy be5l2 l context bsameha bil esm le bade yeh w be3mla export
//mainContext howe esm l context ana smytu w fadye 3ld at begining b3d ma fe name de2enlo
export const MainContext=createContext({}); 
/*
3.telet shy bde l provider le bde eb3t fe le bde yeh mtl l name w hek b7oto b a3la matra7 le howe l app.jsx mish bil main le2no l main mish component
wb8alef kel shy b2lb l app(le2no howe aktr shy 3omomi 3a level 3ale) bil return bil provider keff??ha nshufa kmn bil App.js 
<esmlcontext.provider value={...}>kel shy bil return</esmlcontext.provider>
4.bser est3ml l context m7l ma bde w bes7b le fe mn 5elel hook esma useContext
*/

