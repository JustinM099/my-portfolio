import { Link } from "react-router-dom";
import { motion } from 'framer-motion';



const Intro = () => {
    return   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
>
        <div className="intro center content">
            <div className="container">
                <h1><Link to="/About" style={{ textDecoration: 'none' }}>I'm Justin.</Link></h1>
                <p className="intro-subtitle">
                    a web developer .
                </p>
            </div>
        </div>
    </motion.div>
};

export default Intro;
