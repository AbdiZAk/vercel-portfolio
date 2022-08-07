import React from 'react';
import Resume from '../../assets/resume.pdf'
import { BiDownload } from 'react-icons/bi'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import { ToastContainer } from 'react-toastify';
import {ToastSuccess} from '../toastify/Toastify'

const CTA = () => {
    const notify = () =>{
        ToastSuccess()
    }
    return (
        <div className='cta'>
            <a href={Resume}  className='btn' download onClick={notify}> Download Resume <BiDownload className={'cta__icon'}/></a>
            <a href="#contact" className={"btn btn-primary"}>Let's Chat <BsFillChatLeftDotsFill className={'cta__icon'}/></a>
            <ToastContainer
                toastStyle={{backgroundColor: "#270F4DFF", color: "#07bb0c", }}
                position="bottom-left"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={"light"}
            />
        </div>

    )
}
export default CTA;