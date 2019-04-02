import React from 'react';
import Logo from './Logo.js';
import Headline from './Headline.js';
import Author from './Author.js';
import Message from './Message.js';

const Card = props => (
    <div className = "card">
        <section className = "main">
            <Logo logo = {props.logoURL}/>
            <Headline headline = {props.headline} />
            <Author name = {props.name} authorImageURL = {props.authorImageURL} />
        </section>
        <Message message_headline = {props.headline} message = {props.message} url = {props.url} show_url = {props.show_url} />
    </div>
);

export default Card;