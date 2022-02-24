import React, { useEffect, useState } from 'react';

import './App.css';

import dataBase from './firebase/firebase'
import firebase from 'firebase/compat/app'

import { FormControl, Input, InputLabel, IconButton } from '@material-ui/core' // Use npm install @material-ui/core to install material-ui
import SendIcon from '@material-ui/icons/Send'  // Use npm i @material-ui/icons to install material-ui-icons
import Message from './components/Message';

import FlipMove from 'react-flip-move'; //Use npm i -S react-flip-move to install flip move to use animation on messages // Source => https://github.com/joshwcomeau/react-flip-move

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // Listener for messages in the database
  useEffect(() => {
    dataBase.collection('messages')
      .orderBy('timestamp', 'desc') //Order the messages to show the latest message on top
      .onSnapshot(snapshot => { //onSnapshot will trigger when messages in the database change and all the data will be in the snapshot variable
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault(); // This line prevent the form from refreshing the page.

    dataBase.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png' alt='logo' />

      <form className='app__form'>
        <FormControl className='app_formControl'>
          {/* <InputLabel>Enter a Message</InputLabel> another opportunity for placeholder*/}
          <Input className='app_input' placeholder='Enter a message...' value={input} onChange={(event) => setInput(event.target.value)} />
          <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
