import React, {useState} from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../modal/Modal";

const Contact = () => {

    const form = useRef()
    const localTheme = localStorage.getItem('Theme')
    const toastTheme = localTheme ? localTheme: 'light'

    if (window.innerWidth < 600) {
        toast.dismiss();
    }

    // Modal Hook
    const [showModal, setShowModal] = useState(false)

    // Send Email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3smioqe', 'template_iww1b6o', form.current, 'nsVYB6iTlGO0Bq6l1')
            .then((result) => {

                e.target.reset()
                toast.success("Message Sent!")
                setShowModal(true)

                setTimeout(() => {
                    setShowModal(false)

                },2000)

        }, (error) => {

                toast.error("Error Sending Message!", {
                   position: "bottom-left"
                })
                setShowModal(true)

                    setTimeout(() => {
                        setShowModal(false)

                    },2000)

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
                    <Modal
                        title={'Message Sent'}
                        show={showModal}
                        close={() => setShowModal(false)}

                    />

                    <ToastContainer
                        className={'toast'}
                        position={"bottom-left"}
                        theme={toastTheme}
                        autoClose={2000}
                        limit={3}
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