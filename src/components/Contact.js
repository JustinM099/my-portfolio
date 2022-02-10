import { motion } from 'framer-motion';

const Contact = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
            <div className="center content">
                <div className="card z-depth-5">

                    <section className="contact-me" id="contact">
                        <h2>Get In Touch</h2>
                        <h3>If you want to talk, please reach out.</h3>
                        <p>Love wine? Love spirits? Love web development? Let's drink and develop together!</p>

                        <div className="button-container">
                            <a className="BUTTON_EVA" href="./assets/Justin Meredith - Resume.pdf">MY RESUME</a>
                            <a className="BUTTON_EVA" href="mailto:justinm099@mac.com">EMAIL ME</a>

                            <a className="BUTTON_EVA"
                                href="tel:12068615635"
                                onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">CALL ME</a>
                        </div>
                    </section>

                </div>
            </div>
    </motion.div>
};

export default Contact;
