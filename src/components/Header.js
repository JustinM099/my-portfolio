import { Link } from "react-router-dom";

const Header = () => {
  return <nav>
    <div className="nav-wrapper">
      <Link to="/" className="left">
        <img
          src={require("../assets/images/grapes.png")}
          style={{ height: '35px' }}
          alt="grapes"
        />
      </Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/About">About Me</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Work">Work</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
};

export default Header;
