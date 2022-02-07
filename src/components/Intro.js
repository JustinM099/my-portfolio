import { Link, NavLink } from "react-router-dom";


const Intro = () => {
    return <>

        <div className="intro center content">
            <div className="container">
                <h1><Link to="/About" style={{ textDecoration: 'none' }}>I'm Justin.</Link></h1>
                <p class="intro-subtitle">
                    a web developer .
                </p>
            </div>
        </div>

    </>
};

export default Intro;
