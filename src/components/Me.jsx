import React, { Component } from 'react';

import '../styles/components/me.css';
import logo from '../assets/logo.svg';

export class Me extends Component {
    constructor(props) {
        super(props);

        this.randomizeQuotes = this.randomizeQuotes.bind(this);
    }

    randomizeQuotes() {
        var quotes = [
            {
                text: "There will come a time when you believe everything is finished. That will be the beginning.",
                author: "Louis L’Amour"
            },
            {
                text: "I object to intellect without discipline; I object to power without constructive purpose.",
                author: "Spock"
            },
            {
                text: "How wonderful it is that nobody need wait a single moment before beginning to improve the world.",
                author: "Anne Frank"
            }
        ]
    
        //------STUDENT
        
        //
        // var numberOfQuotes = quotes.length - 1;
        // var random = Math.random() * numberOfQuotes;

        // var quoteIndex = Math.round(random);

        // console.log(quoteIndex);


        // var randomQuote = quotes[quoteIndex];

        // return randomQuote;
    }

    render() {

        const randomQuote = this.randomizeQuotes();

        return (
          <div className="me-container">
            {/*Student*/}

            {/*
            <h1 className="me-title">Welcome Conder</h1>
            <p className="subheader me-msg">{randomQuote.text}</p>
            <p className="subheader me-author">- {randomQuote.author}</p>
        */}

          </div>
          );
    }
}

export default Me;