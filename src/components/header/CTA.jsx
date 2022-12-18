import React from 'react';
import Resume from '../../assets/resume.pdf'
import { BiDownload } from 'react-icons/bi'
import { RiContactsFill } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CTA = () => {
    const notify = () =>{
        // ToastSuccess('Resume Downloaded!')

        toast.success('Resume Downloaded',
            {
                position:"bottom-left",
            })
    }
    return (
        <div className='cta'>
            <a href={Resume}  className='btn' download onClick={notify}> Download Resume <BiDownload className={'cta__icon'}/></a>
            <a href="#contact" className={"btn btn-primary"}>Contact Me <RiContactsFill className={'cta__icon'}/></a>
        </div>

    )
}
export default CTA;