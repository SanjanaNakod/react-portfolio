import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

const [letterClass, setLetterClass] = useState('text-animate')


useEffect(()=>{
    setTimeout(()=>{
        setLetterClass('text-animate-hover')
    }, 3000)
  },[])
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>I'm very ambitious front-end developer looking for a role in established IT comapany with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                <p>
                I'am quietly confident, naturally curious, and prepetually working on improving my chops one design problem at a time.</p>
        
            </div>
            
            <div className="stage-cube-cont">
                <div className="cubespinner">                 
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>                 
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faNodeJs} color='#488c45' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faBootstrap} color='#8512fb' />
                    </div>          
                    <div className="face6">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>          
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About