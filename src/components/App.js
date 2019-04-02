import React, { Component } from 'react';
import Card from './Card.js';
import cardData from '../cardData.js';
import headshot from '../ProcoreHeadshot.jpg';
import logo from '../sn.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          logoURL = {logo}
          headline = {cardData.headline}
          name = {cardData.name}
          authorImageURL = {headshot}
          message = {cardData.message}
          url = {cardData.url}
          show_url = {cardData.urlDisplayName}
        />
      </div>
    );
  }
}

export default App;
