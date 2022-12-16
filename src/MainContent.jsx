import React from 'react'
import './MainContent.css'
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Topsection from './components/Topsection';
// import linkedin from './assets/linkedin.svg'
// import github from './assets/github.svg'
// import mail from './assets/gmail.com.svg'

export default function MainContent(){
    return (
        <>
        <Topsection />
           <About />
            <Interests />   
           <Footer />
            </>
    )
        
}