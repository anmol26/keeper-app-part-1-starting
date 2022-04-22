import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
//import Card from "./Card";
import notes from "../notes"
import Time from "./Time"

// function CreateNotes(noteItem){
//     return(
//         <Note key={noteItem.key} title={noteItem.title} content={noteItem.content}/>
//     );
// }

function App()
{
    let now= new Date().toLocaleTimeString();
    const [currentTime,setTime]= useState(now);

    function updateTime(){
        return(setTime(now));
    }

    return( 
    <div>
        <Header />
        {/* {notes.map(CreateNotes)} */}
        {notes.map( noteItem => (<Note key={noteItem.key} title={noteItem.title} content={noteItem.content}/>))}
        {/* <Card name="Anmol" src="https://picsum.photos/200" tel="123445678" email="a.kh@Tech.com"/>
        <Card name="vaibhav" src="https://picsum.photos/200" tel="846445678" email="v.an@Tech.com"/> */}

        <Time currentTime={currentTime}/>
        <button onClick={updateTime}>Click Me to Get CurrentTime</button>
        <Footer />

    </div>
    );
}

export default App;