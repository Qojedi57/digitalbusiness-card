import React from 'react'
import './MainContent.css'
import { SocialIcon } from 'react-social-icons';
import me from './assets/Imageofmyself.jpg'
// import linkedin from './assets/linkedin.svg'
// import github from './assets/github.svg'
// import mail from './assets/gmail.com.svg'

export default function MainContent(){
    return (
        <>
        <div className='img-container'>
        <img className='main-img' src={me} alt="Me" style={{width:"25%"}} />
        </div>
        <div className='sub-container'>
        <h2 className='name'>Eduardo Contreras</h2>
        <h4 className='role'>Software Developer</h4>
        <div className='connect'>
            {/* <a classname='mail' href="Contreraseduardo185@gmail.com"> src={mail} alt="mail" /> Email</a> */}
            <SocialIcon url="mailto:Contreraseduardo185@gmail.com" />
            <SocialIcon url="https://www.linkedin.com/in/eduardocontrerasramirez/" />
            {/* <a classname='linkedin' href="https://www.linkedin.com/in/eduardocontrerasramirez/" target='_blank'><img src="" alt="" />LinkedIn</a> */}
            </div>
            <div className='about'>
                <h3>About</h3>
                <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career.</p>
                </div>
                <div className='interest'>
                    <h3>Interests</h3>
                    <p>Finance.Music.Technology.Sport.Health.I love connecting with new people, give me a shout at Contreraseduardo185@gmail.com.</p>
                    </div>
                    </div>
                    <div className='footer'>
                        <SocialIcon url="https://github.com/Qojedi57?tab=repositories" />
                        {/* <a href="https://github.com/Qojedi57" alt="github"></a> */}
                        <SocialIcon url="https://www.facebook.com/" />
                        <SocialIcon url="https://www.instagram.com/" />
                        </div>
                        </>
    )
        
}