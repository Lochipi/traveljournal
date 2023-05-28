import React from "react"
import Header from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import data from "./assets/data"
import { MainStyled } from "./components/styles.jsx/Main.styled"

function App(){
    const info = data.map((item) =>
     <Card 
        key = {item.id}
        {...item}
     />
     )
    return(
        <>
        <Header /> 
            <MainStyled>              
              {info}
            </MainStyled>
            <Footer />
        </>
    )
}

export default App