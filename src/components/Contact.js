import React from 'react';

const Contact = () => {
    return <div>

        <div className="center content">
            <div className="card">

                <section className="contact-me" id="contact">
                    <h2>Get In Touch</h2>
                    <h3>If you want to talk, please reach out.</h3>
                    <p>Love wine? Love spirits? Love web development? Let's drink and develop together!</p>

                    <div className="button-container">
                        <a className="BUTTON_EVA" href="Justin Meredith - Resume.pdf">MY RESUME</a>
                        <a className="BUTTON_EVA" href="mailto:justinm099@mac.com">EMAIL ME</a>

                        <a className="BUTTON_EVA"
                            href="tel:12068615635"
                            onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">CALL ME</a>
                    </div>
                </section>

            </div>
        </div>

    </div>;

};

export default Contact;
