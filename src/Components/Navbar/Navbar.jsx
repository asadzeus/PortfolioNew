import './navbar.css'
import { Link } from 'react-scroll'
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import { useEffect } from 'react';


const Navbar = () => {

  function openNavLinks(){
    const links = document.getElementById("navbarBottom");  

    if (links.style.display !== "flex") {
      links.style.display = "flex";
      links.style.visibility = "visible";
      console.log("opened");
    } else {
      links.style.display = "none";
      links.style.visibility = "hidden";
      console.log("closed");
    }
            
  }

  useEffect(() => {
    function handleResize() {
      const links = document.getElementById("navbarBottom");
      if (window.innerWidth > 650) {
        links.style.display = "none";
        links.style.visibility = "hidden";
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className="navbarTop">
      <div className="left"><Link to="home" spy={true} smooth={true} offset={-100} duration={500}><h1 className='logo'>My Portfolio</h1></Link></div>
      <div className="right">
        <div className='rightIcon' onClick={openNavLinks}><DensityMediumRoundedIcon/></div>
        <ul>
          <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Home</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>About</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Projects</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className='navLink'>Skills</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500 } className='navLink'>Contact</Link></li>
        </ul>
        
      </div>
      </div>

      <div className="navbarBottom" id='navbarBottom'>
        <ul className='links'>
          <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='navLink2'>Home</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='navLink2'>About</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className='navLink2'>Projects</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className='navLink2'>Skills</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500 } className='navLink2'>Contact</Link></li>
        </ul>
      </div>
      
    </div>

  )
}

export default Navbar
