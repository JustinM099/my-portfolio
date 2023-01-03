import { motion } from 'framer-motion';

const Work = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="center content work-content">
            <h2>My Work</h2>
            <div className="container row work-container">
            <div className="card work-card col s12 m3 z-depth-5">
                    <div className="work-card-header">
                        <h5>Bottles DB v2</h5>
                    </div>
                    <a href="https://bottles-db-mern.herokuapp.com/">
                        <img
                            className="work-preview"
                            src={require("../assets/images/bottles-db-mern-screenshot.png")}
                            alt="a preview for bottles db mern" />
                    </a>
                    <div>
                        <a href="https://github.com/JustinM099/bottlesDB">
                            <img
                                className="link-icon"
                                src={require("../assets/images/GitHub-Mark-120px-plus.png")}
                                alt="Github icon" />
                        </a>
                    </div>
                </div>
                <div className="card work-card col s12 m3 z-depth-5">
                    <div className="work-card-header">
                        <h5>Bottles DB v1</h5>
                    </div>
                    <a href="https://bottles-db.herokuapp.com/">
                        <img
                            className="work-preview"
                            src={require("../assets/images/bottles-db-preview.png")}
                            alt="a preview for bottles db" />
                    </a>
                    <div>
                        <a href="https://github.com/JustinM099/wine-cellar-tracker">
                            <img
                                className="link-icon"
                                src={require("../assets/images/GitHub-Mark-120px-plus.png")}
                                alt="Github icon" />
                        </a>
                    </div>
                </div>
                <div className="card work-card col s12 m3 z-depth-5">
                    <div className="work-card-header">
                        <h5>Cocktail Hour</h5>
                    </div>
                    <a href="https://lyssg2.github.io/cocktail-hour/index.html">
                        <img
                            className="work-preview"
                            src={require("../assets/images/cocktail-hour-preview-image.png")}
                            alt="a preview for a cocktail ingredients site" />
                    </a>
                    <div>
                        <a href="https://github.com/lyssg2/cocktail-hour">
                            <img
                                className="link-icon"
                                src={require("../assets/images/GitHub-Mark-120px-plus.png")}
                                alt="Github icon" />
                        </a>
                    </div>
                </div>
                <div className="card work-card col s12 m3 z-depth-5">
                    <div className="work-card-header">
                        <h5>Weather Dashboard</h5>
                    </div>
                    <a href="https://justinm099.github.io/weather-dashboard/">
                        <img
                            className="work-preview"
                            src={require("../assets/images/weather-dashboard-link.png")}
                            alt="a preview for the mosaic learning center website" />
                    </a>
                    <div>
                        <a href="https://github.com/JustinM099/weather-dashboard">
                            <img
                                className="link-icon"
                                src={require("../assets/images/GitHub-Mark-120px-plus.png")}
                                alt="Github icon" />
                        </a>
                    </div>
                </div>
                <div className="card work-card col s12 m3 z-depth-5">
                    <div className="work-card-header">
                        <h5>Tech Blog</h5>
                    </div>
                    <a href="https://incredible-tech-blog.herokuapp.com/">
                        <img
                            className="work-preview"
                            src={require("../assets/images/tech-blog-screenshot.png")}
                            alt="a preview for a tech blog" />
                    </a>
                    <div>
                        <a href="https://github.com/JustinM099/tech-blog">
                            <img
                                className="link-icon"
                                src={require("../assets/images/GitHub-Mark-120px-plus.png")}
                                alt="Github icon" />
                        </a>
                    </div>
                </div>
                <div className="card work-card col s12 m3 z-depth-5">
                    <div className="work-card-header">
                        <h5>Mosaic Learning Center</h5>
                    </div>
                    <a href="https://justinm099.github.io/mosaic-learning-center/">
                        <img
                            className="work-preview"
                            src={require("../assets/images/mosaic-preview-image.jpeg")}
                            alt="a preview for the mosaic learning center website" />
                    </a>
                    <div>
                        <a href="https://github.com/JustinM099/mosaic-learning-center">
                            <img
                                className="link-icon"
                                src={require("../assets/images/GitHub-Mark-120px-plus.png")}
                                alt="Github icon" />
                        </a>
                    </div>
                </div>

            </div>
            <br />
        </div>
    </motion.div>
};

export default Work;
