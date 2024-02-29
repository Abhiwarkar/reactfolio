import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2f6mwfs', 'template_q0bnqf2', formRef.current, '-WAXToZ8EcEo2tNlL')
            .then((result) => {
                setSuccess(true);
            })
            .catch((error) => {
                setError(true);
            });
    };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.div className="formContainer">
                    <motion.h1 variants={variants}>Let&apos;s Work
                        <p>Together </p>
                    </motion.h1>
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <span>hello@react.dev</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Address</h2>
                        <span>Amanora Street,Dubai</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Phone</h2>
                        <span>7414902132</span>
                    </motion.div>
                    <motion.div className="formContainer">
                        <motion.form
                            ref={formRef}
                            onSubmit={sendEmail}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 4, duration: 1 }}
                        >
                            <input type="text" required placeholder="Name" name="name" />
                            <input type="email" required placeholder="Email" name="email" />
                            <textarea rows={8} placeholder="Message" name="message" />
                            <button>Submit</button>
                        </motion.form>
                        {error && <p>Error sending email</p>}
                        {success && <p>Email sent successfully</p>}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Contact;
