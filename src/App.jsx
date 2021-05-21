import React, { useState } from 'react';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';

export default function App() {
  const initQuote = [
    {
      quote:
        'By chilling my loins I increase the chances of impregnating my wife.',
      character: 'Apu Nahasapeemapetilon',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
      characterDirection: 'Left',
    },
  ];

  const [quotes, setQuotes] = useState(initQuote);

  const displayQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(({ data }) => {
        setQuotes(data);
      });
  };

  return (
    <div className='App'>
      <button onClick={displayQuote}>Load a quote here !</button>
      {quotes.map((quote) => {
        return <DisplayQuote {...quote} />;
      })}
    </div>
  );
}
