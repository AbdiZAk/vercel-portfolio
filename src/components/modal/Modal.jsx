import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import './modal.css'

const Modal = (props) => {
        if (!props.show) {
            return null
        }

    return (

        <div className={`modal ${props.show ? 'show': ''}`}>

            <div className={'modal-content'}>
                <CgClose onClick={props.close} className={'close close-button'}/>
                <div className="modal-header">
                    <h3 className={'modal-title'}>{props.title}</h3>
                </div>
                <div className="modal-body">
                    <BsFillCheckCircleFill className={'modal-checkIcon'}/>
                </div>
            </div>

        </div>
    )
}

export default Modal;