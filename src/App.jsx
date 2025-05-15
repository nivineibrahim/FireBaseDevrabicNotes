import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import About from "./pages/about";
//lcontext le bde ektbo hl2 fene est3mlo bl kel l saf7at le m3rfeta ana hon mtl Home/Contacts/About
//hon be3ml Define la my Context
import {MainContext} from "./utils/context";
import {useState} from "react";

 function App(){
  //hla bade variable yale bt5alene e3ml store lal name aw l user le da2aytelo e5r shy bas hl user momken yet8yr fa best3ml l useState
  //lesh undefined?3ld ba3edni ana ma d2et la 7ada ma fe last called user
  const [lastCalledUser,setLastCalledUser]=useState(undefined);
  //function la n8yr l last called user
  const storeLastCalledUser = (user) => setLastCalledUser(user);//besersetlal user b2lb l lastCalledUser
  //hala2 sar fene est3ml l lastCalledUser b wen ma bde heye wel function te3eleta bs aked lezem hota bil userCard
  return(
    //hl2 bde n8alef l routes bil provider kerml eb3t l information 3l pages
    // .provider ya3ni hyda l mainContext 3m y2amen ma3lomet la hal application,values shu hene l ma3lomet le ana bade 3atehun lal application tab3etna kerml ne2der nest5demon ba3den
    <MainContext.Provider value={{lastCalledUser,storeLastCalledUser}}> 
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
    </MainContext.Provider>

  );
 }       

export default App;
