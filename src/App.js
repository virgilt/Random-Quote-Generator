import React, { Component } from 'react';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faQuoteLeft)
// import Quote from './quote';
// import NewQuote from './newquote';

class App extends Component {
  state = {
    quotes: [{text: 'Help me, Obi-Wan Kenobi. You’re my only hope.', author: 'Leia Organa', id: 0, side: 'rebel'},
    {text: "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.", author: 'Han Solo', id: 1, side: 'rebel'},
    {text: 'I find your lack of faith disturbing.', author: 'Darth Vader', id: 2, side: 'empire'},
  {text: 'The Force will be with you. Always.', author: 'Obi-Wan Kenobi', id: 3, side: 'rebel'},
{text: 'Why, you stuck-up, half-witted, scruffy-looking nerf herder!', author: 'Leia Organa', id: 5, side: 'rebel'},
{text: 'Never tell me the odds!', author: 'Han Solo', id: 5, side: 'rebel'},
{text: 'Do. Or do not. There is no try.', author: 'Yoda', id: 6, side: 'rebel'},
{text: 'No. I am your father.', author: 'Darth Vader', id: 7, side: 'empire'},
{text: 'When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.', author: 'Yoda', id: 8, side: 'rebel'},
{text: 'I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.', author: 'Luke Skywalker', id: 9, side: 'rebel'},
{text: 'Now, young Skywalker, you will die.', author: 'Emperor Palpatine', id: 10, side: 'empire'},
{text: 'Just for once, let me look on you with my own eyes.', author: 'Anakin Skywalker', id: 11, side: 'empire'},
{text: "There's always a bigger fish.", author: 'Qui-Gon Jinn', id: 12, side: 'rebel'}],
    currentText: null,
    currentAuthor: null,
    currentSide: null
  }

  componentWillMount() {
    let getRandomQuote = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      currentText: this.state.quotes[getRandomQuote].text,
      currentAuthor: this.state.quotes[getRandomQuote].author,
      currentSide: this.state.quotes[getRandomQuote].side
    })
  }

  handleChange = () => {
    let getRandomQuote = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      currentText: this.state.quotes[getRandomQuote].text,
      currentAuthor: this.state.quotes[getRandomQuote].author,
      currentSide: this.state.quotes[getRandomQuote].side
    })
  }

  handleTweet = () => {
  var text = this.state.currentText + ' - ' + this.state.currentAuthor;
  window.open("https://twitter.com/intent/tweet?text=" +  encodeURIComponent(text), '_blank')
}

  // changeQuote = (quote) => {
  //   let quotes = [...this.state.quotes, quote];
  //   this.setState({
  //     quotes: quotes
  //   })
  // }

  render() {
    return (
        <div id='quote-box'>
          {/* <Quote quotes={this.state.quotes}/> */}
          <p id='text' className={this.state.currentSide}><FontAwesomeIcon icon='quote-left'/> {this.state.currentText}</p>
          <h4 id='author' className={this.state.currentSide}>- {this.state.currentAuthor}</h4>
          <div id='buttons'>
            <a className='button' id='tweet-quote' className={this.state.currentSide} onClick={this.handleTweet}><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
            <button className='button' id='new-quote' className={this.state.currentSide} onClick={this.handleChange}>New Quote!</button>
          </div>

          {/* <NewQuote id='new-quote' changeQuote={this.changeQuote} quotes={this.state.quotes}/> */}

        </div>
    )
  }
}

export default App
