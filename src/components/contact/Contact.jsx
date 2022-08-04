import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3smioqe', 'template_iww1b6o', form.current, 'nsVYB6iTlGO0Bq6l1')
            .then((result) => {
                e.target.reset()
                toast.success('Message Sent Successfully!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
        }, (error) => {
                toast.error('Failed To Send Message!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })


    }

    return (
        <section id={'contact'}>
            <div className="title">
                <h6>Contact Me</h6>
                <h2>Contacts</h2>
            </div>
            <div className="container contact__container">
                <form ref={form} onSubmit={sendEmail}>
                    <input name="name" type="text" className="feedback-input" placeholder="Name" required/>
                    <input name="email" type="text" className="feedback-input" placeholder="Email" required/>
                    <textarea name="message" className="feedback-input" placeholder="Message"/>
                    <input type="submit" className={'submit'} value="Send"/>
                    <ToastContainer
                        toastStyle={{height: "40px", padding: "0.4rem 0.3rem", backgroundColor: "#270F4DFF", color: "#07bb0c", }}
                        position="bottom-left"
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={"dark"}
                    />
                </form>

                <div className="contact__options">
                    <div className="contact__email">
                        <MdEmail className={'icons'}/>
                        <p>Send Me an Email</p>
                        <small className={'text-light'}>Abdirezak1924@gmail.com</small>
                        <a href="mailto:Abdirezak1924@gmail.com" target='_blank'>Send a Message</a>
                    </div>
                    <div className="contact__whatsapp">
                        <RiWhatsappFill className={'icons'} />
                        <p>Contact me on Whatsapp</p>
                        <small className={'text-light'}>315-395-1028</small>
                        <a href="https://api.whatsapp.com/send?phone=13153951028" target='_blank'>Send a Message</a>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Contact;