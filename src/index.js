import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


/*
Structure of app
context: keep score, best score, provide memory cards info - name image etc,
score - use id to check which card we've clicked on, if not clicked add 1 to score, if clicked reset
each time we click need to reshuffle the order of the cards, can create function for this in context
reset on loss

function randomize(a, b) {
    return Math.random() - 0.5;
}

yourQuestionArray.sort(randomize);

*/