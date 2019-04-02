import React from 'react';

const Message = props => (
    <section className = "message">
        <h4 className = "message__headline"> {props.message_headline} </h4>
        <p className = "message__text"> {props.message}</p>
        <a href={props.url} className="message__url"> {props.show_url} </a>
    </section>
);
    
export default Message;