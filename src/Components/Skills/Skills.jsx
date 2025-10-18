import Skill from '../Skill/Skill'
import './skills.css'
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className="skillsContainer">
        <div className="skillTitle"><ComputerRoundedIcon className='skillIcon'/> Skills & Abilities</div>
        <div className="skillRow">
          <Skill name="React" img="/reactlogo.png"/>
          <Skill name="Next Js" img="/nextjsicon.png"/>
          <Skill name="Javascript" img="/jslogo.png"/>
          <Skill name="Mysql" img="/mysqllogo.png"/>
          <Skill name="HTML" img="/htmllogo.png"/>
          <Skill name="CSS3" img="/csslogo.png"/>
          
          <Skill name="Unreal Engine" img="/uelogo.png"/>
          <Skill name="Blender" img="/blenderlogo.png"/>
          <Skill name="Photoshop" img="/pslogo.png"/>
          <Skill name="Illustrator" img="/illustratorlogo.png"/>

        </div>

      </div>
    </div>
  )
}

export default Skills
