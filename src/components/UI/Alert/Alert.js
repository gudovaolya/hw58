import React from 'react';
import Wrapper from "../../../hoc/Wrapper";

const Alert = (props) => {

    return (
        <Wrapper>
            <div className={'alert alert-' + props.type}>
                <button type="button" className="close" onClick={(event) => props.dismiss(event)}>
                    <span>&times;</span>
                </button>
                {props.children}
            </div>
        </Wrapper>
    )
};

export default Alert;