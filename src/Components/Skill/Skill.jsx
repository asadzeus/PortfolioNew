import './skill.css'

const Skill = (props) => {
  return (
    <div className='skill'> 
      <img src={props.img} alt="" className='skillImage'/>
      <span className='skillName'>{props.name}</span>
    </div>
  )
}

export default Skill
