import './about.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="aboutLeft">
            <div className="aboutFrame"> <img src="public\about.png" alt="" className='aboutImg'/></div>
        </div>

        <div className="aboutRight">
            <div className="aboutTexts">
                <h1>About Me</h1>
                <h4>I am a Front-End, Game developer based in Turkey. I am an Computer Engineering undergraduate from EUL. I am very passionate about improving my coding skills & developing games & websites. I build Games using (Unreal Engine, Blender) and Websites using (React, HTML, CSS). Working for myself to improve my skills.     
                </h4>
            </div>
            
        </div>
    
    </div>
  )
}

export default About
