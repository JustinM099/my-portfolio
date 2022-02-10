import { motion } from 'framer-motion';

const About = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
            <div className="center content">
                <div className="card z-depth-5">
                    <section className="about">
                        <div className="profile" id="profile">
                            <img src={require('../assets/images/profile-image-2021.png')} alt="my profile image"
                                className="profile-pic" />
                            <h2>Hello!</h2>
                            <p>I'm Justin Meredith, a wine nerd turned web developer. I've spent more than a decade in the wine industry.
                                <br /> Now I'm changing fields, and beginning a new career. Join me on my journey.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
    </motion.div>
};

export default About;
