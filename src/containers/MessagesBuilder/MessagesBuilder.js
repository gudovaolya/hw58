import React, {Component} from 'react';
import Wrapper from "../../hoc/Wrapper";
import Messages from "../../components/Messages/Messages";
import Modal from "../../components/UI/Modal/Modal";
import Alert from "../../components/UI/Alert/Alert";

class MessagesBuilder extends Component {

    state = {
        messages: [
            {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, laboriosam', author: 'Alex', id: 'mes-1'},
            {text: 'Alias culpa debitis ducimus libero recusandae. Debitis eaque modi neque nisi porro', author: 'Vitaly', id: 'mes-2'},
            {text: 'Consectetur adipisicing elit. Alias culpa debitis ducimus libero recusandae', author: 'Jeck', id: 'mes-3'},
            {text: 'A aspernatur at aut commodi debitis distinctio dolorem dolores id inventore maiores maxime, nam non nostrum.', author: 'Inga', id: 'mes-4'},
            {text: 'Оbcaecati odio officiis possimus praesentium saepe suscipit unde? Assumenda cupiditate ducimus', author: 'Irena', id: 'mes-5'}
        ],
        modalShow: false,
        modalText: '',
        modalAuthor: ''
    };

    modalShowHandler = (id) => {
        const index = this.state.messages.findIndex(item => item.id === id);
        const message= {...this.state.messages[index]};
        const currentModalText = message.text;
        const currentModalAuthor = message.author;
        this.setState({modalText: currentModalText, modalAuthor: currentModalAuthor, modalShow: true});
    };

    modalCloseHandler = () => {
        this.setState({modalShow: false});
    };

    dismissHandler = (event) => {
        event.target.parentNode.parentNode.className += ' d-none';
    };

    makeModalBtns = () => {
        const btnsInfo = [
            {type: 'primary', label: 'Continue', clicked: this.continued},
            {type: 'danger', label: 'Close', clicked: this.modalCloseHandler}
        ];

        const modalBtns = btnsInfo.reduce((acc, item, index) => {
            acc.push(
                <button className={'btn btn-' + item.type} onClick={item.clicked}>
                    {item.label}
                </button>
            );
            return acc;
        },[])
        return modalBtns;
    };

    continued = () => {
        alert('You clicked Continued!');
    };

    render() {

        return (
            <Wrapper>
                <Modal
                    show={this.state.modalShow}
                    closed={this.modalCloseHandler}>
                    <div className="modal-header">
                        <h5 className="modal-title">{'Author this message: ' + this.state.modalAuthor}</h5>
                        <button type="button" className="close" onClick={this.modalCloseHandler}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{this.state.modalText}</p>
                    </div>
                    <div className="modal-footer">
                        {this.makeModalBtns()}
                    </div>
                </Modal>
                <Messages
                    messages = {this.state.messages}
                    click = {this.modalShowHandler}
                />
                <Alert type="primary" dismiss={this.dismissHandler}>
                    This is a warning type alert!
                </Alert>
                <Alert type="success" dismiss={this.dismissHandler}>
                    This is a success type alert!
                </Alert>
                <Alert type="warning" dismiss={this.dismissHandler}>
                    This is a warning type alert!
                </Alert>
                <Alert type="danger" dismiss={this.dismissHandler}>
                    This is a danger type alert!
                </Alert>
            </Wrapper>
        )
    }
}

export default MessagesBuilder;