import React from 'react';
import Heading from './components/Heading/Heading';
import MessagesList from './components/MessagesList/MessagesList';
import MessageBox from './components/MessageBox/MessageBox';
import './App.scss';

const url = 'https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg='


class App extends React.Component {

  state = {
    inputText: '',
    msgText: '',
    messages: []
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value,
      msgText: e.target.value.trim().replace(/ /g, '%')
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.msgText !== '') {
      this.addMessage(this.state.inputText, true);
      this.runBot(this.state.msgText);
    }
    this.setState({ inputText: '' });
  }

  addMessage = (content, userMsg) => {
    this.setState({
      messages: [...this.state.messages, { content, userMsg }]
    });
    // keep scroll down when add message
    const messagesList = document.querySelector('.messages-list');
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  runBot = (msgText) => {
    fetch(url + msgText, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
        "x-rapidapi-key": "25dfead085msh556a9e3db2d2d65p101b34jsn7e868d185ca9"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
        this.addMessage(response.cnt, false);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="app-container">
        <Heading />
        <div className="chat-wrapper">
          <MessagesList messages={this.state.messages} />
          <MessageBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputText={this.state.inputText} />
        </div>
      </div>
    );
  }
}

export default App;
