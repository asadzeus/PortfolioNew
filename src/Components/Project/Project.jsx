import './project.css'

const Project = (props) => {
  return (
    <a href={props.link} target='_blank' className='project'>
      <div className="projectTop">
        <div className="projectFrame">
            {props.img ? 
            <img src={props.img} alt="" className='projectImg'/> : 
            <p className='comingSoon'>Coming Soon</p>
            }
            
        </div>
      </div>

      <div className="projectTitle">{props.name}</div>
    </a>
  )
}

export default Project
