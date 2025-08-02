import Project from '../Project/Project'
import './projects.css'
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className="projectsContainer">
        <div className="projectsTitle"><WorkOutlineRoundedIcon className='projectsIcon'/> My Projects </div>
        <div className="row">
        <Project link="https://vixygames.vercel.app/" img="/arkaplansızlogo.png" name="Vixy Games"/>
        <Project link="https://barbershopsimulator.vercel.app/" img="/barbershopicon.png" name="Vixy Games"/>
        <Project link="https://imagetotextai.netlify.app/" img="/imgtotextlogo.png" name="Img To Text Converter"/>
        <Project link="https://personaladminpanel.netlify.app/" img="/adminpanellogo.png" name="Admin Panel"/>
        <Project link="https://bespiderman.netlify.app/" img="/spiderlogo.png" name="Be Spiderman"/>
        <Project link="https://airportpatrol.netlify.app/" img="/airportpatrollogo.png" name="Airport Patrol"/>
        <Project/>
        </div>
      </div>
    </div>
  )
}

export default Projects
