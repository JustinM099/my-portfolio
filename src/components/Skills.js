import { motion } from 'framer-motion';

const Skills = () => {
    return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
>
        <div className="center content skills-content">
            <div className="card z-depth-5">
                <div className="skills" id="skills">
                    <h2>My Skills</h2>
                    <div className="skill-row">
                        <img className="wine-glasses" src="https://image.flaticon.com/icons/png/512/3751/3751571.png" alt="wine-glasses" />
                        <h3>Wine and Spirits</h3>
                        <p className="wine-row-description">I started in the wine and spirits industry in 2007, taking a part time job at
                            the incredible Esquin Wine Merchants in south Seattle.
                            <br />Before long, I'd stopped studying my original major (art history) and decided to pursue a career in the
                            wine industry.
                            I began studying winemaking at the Northwest Wine Academy, and later got a job in wine sales.
                            <br />I now work as a sales representative for a wine wholesaler in the east side suburbs of Seattle.
                        </p>
                    </div>
                    <br />

                    <div className="skill-row">
                        <img className="technology" src="https://image.flaticon.com/icons/png/512/2920/2920249.png" alt="technology" />
                        <h3 className="web-dev-title">Web Development</h3>
                        <p className="technology-row-description">Recently, I've decided to change careers and embark upon a journey into
                            the world of web development.
                            <br />What you're seeing here is an example of all of the skills that I've learned so far. Watch me grow!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </motion.div>
};

export default Skills;
