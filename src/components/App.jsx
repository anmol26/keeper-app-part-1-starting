import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Card from "./Card";

function App()
{
    return( 
    <div>
        <Header />
        {/* <Note /> */}
        <Card name="Anmol" src="https://picsum.photos/200" tel="123445678" email="a.kh@Tech.com"/>
        <Card name="vaibhav" src="https://picsum.photos/200" tel="846445678" email="v.an@Tech.com"/>
        <Footer />
    </div>
    );
}

export default App;