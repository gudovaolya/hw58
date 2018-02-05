import React from 'react';
import './Modal.css'
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    return (
        <Wrapper>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className="modal-dialog" style={{display: props.show ? 'block' : 'none'}}>
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </Wrapper>
    )
};

export default Modal;