import React from 'react';

const Author = props => (
    <div className = "author-box">
        <p className = "author-box__name"> {props.name} </p>
        <img src = {props.authorImageURL} alt = "headshot" className = "author-box__headshot" />
    </div>
);

export default Author;