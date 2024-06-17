import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left"><h1 className='logo'>My Portfolio</h1></div>
      <div className="right">
        <ul>
          <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Home</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>About</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Projects</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Skills</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500 } className='navLink'>Contact</Link></li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar
