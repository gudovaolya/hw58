import React from 'react';
import './Messages.css';


const Messages = (props) => {

    const messages = props.messages;

    const messagesBlock = messages.reduce((acc, item, index) => {
        acc.push (
            <div className="message" key={item.id}>
                <p className="message-txt">{item.text}</p>
                <div className="al-right">
                    <button className="btn btn-primary btn-sm" onClick={() => props.click(item.id)}>More Detail</button>
                </div>

            </div>
        );
        return acc;
    }, []);

    return (
        <div className="messages-block">
            {messagesBlock}
        </div>
    )

};

export default Messages;