import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import StripeCheckout from "react-stripe-checkout";

const Contact = () => {

    async function handleToken(token, addresses) {
        console.log('☕️ - damn fine coffee')
    }


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
        <div className="center content">
            <div className="card z-depth-5">

                <section className="contact-me" id="contact">
                    <h2>Get In Touch</h2>
                    <h3>If you want to talk, please reach out.</h3>
                    <p>Love wine? Love spirits? Love web development? Let's drink and develop together!</p>

                    <div className="button-container">
                        <a className="BUTTON_EVA" href="https://drive.google.com/file/d/1n0j8gOMl5Ydy9xfE4TAykyHDKLZbAYFP/view?usp=sharing">MY RESUME</a>
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
