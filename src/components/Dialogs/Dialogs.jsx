import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_xsOsL-LdG3gdKQ51EVDthcUoP0PqYp3qQ&usqp=CAU'/>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
               <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>


    )
}


export default Dialogs;