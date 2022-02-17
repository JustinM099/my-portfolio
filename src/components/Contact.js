import { motion } from 'framer-motion'
import { Container } from 'react-materialize'

const Contact = () => {

    const validateEmail = (email) => {
        const regex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
        return regex.test(String(email).toLowerCase())
    }
    const validate = (e) => {
        if (!e.target.value.length) {
            alert('Sorry, all fields are required.')
        }
    }

    const validateEmailInput = (e) => {

        if (e.target.name === 'email') {
            const validation = validateEmail(e.target.value)
            if (!validation) {
                alert('Sorry, your email is invalid.')
            }
        }
    }


    const submitButton = (e) => {
        e.preventDefault()
        console.log('CLICK')
        document.getElementById("email-form").reset()
    }

    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="center content contact-content">
            <div className="card z-depth-5">

                <section className="contact-me" id="contact">
                    <h2>Get In Touch</h2>
                    <h3>If you want to talk, please reach out.</h3>
                    <p>Love wine? Love spirits? Love web development? Let's drink and develop together!</p>

                    <Container className="container form-container">
                        <form className="row form" id="email-form">
                            <div className="input-field s12 m6 form-control">
                                <input id="name" name="name" type="text" placeholder="Your Name" className="validate" onBlur={validate} />
                            </div>
                            <div className="input-field s12 m6 form-control">
                                <input id="email" name="email" type="email" placeholder="Your Email" className="validate" onBlur={validateEmailInput} />
                            </div>
                            <div className="input-field s12 m6 form-control">
                                <textarea rows="5" id="name" type="text" placeholder="Your Note To Me" className="validate" onBlur={validate} />
                                <button className="BUTTON_EVA form-control" type="submit" onSubmit={submitButton}>SEND</button>
                            </div>
                        </form>
                    </Container>
                    <div className="button-container">
                        <a className="BUTTON_EVA" href="./assets/Justin Meredith - Resume.pdf">MY RESUME</a>


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
