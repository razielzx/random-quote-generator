import { useState } from "react";
import quotes from "../quotes.json"

const Quotes = () => {

    //Index state changers
    const [randomQuoteIndex, setRandomQuoteIndex] = useState(Math.floor(Math.random(quotes.length)));

    //Style state changers
    const bgColors = ["#FB6D10", "#EB3E1B", "#2E2E41", "#4D3347", "#86112E", "#F7AD19", "#FDAE86", "#EA4A6B", "#7271C1", "#89C7CB"];

    const [backgroundIndex, setBackgroundIndex] = useState(0);

    //function to handle the index of arrays bgColors & quotes
    const randomQuote = () => {
        setRandomQuoteIndex(Math.floor(Math.random() * 102));
        setBackgroundIndex(Math.floor(Math.random() * 10));
    };

    //console.log(quotes)
    //console.log(randomIndex)
    //console.log(backgroundIndex)

    return (
        <div className="quote">
            <div className="anime" title="" style={{backgroundColor: bgColors[backgroundIndex]}}>Quote Generator</div>

            <blockquote style={{backgroundColor: bgColors[backgroundIndex]}}>{quotes[randomQuoteIndex].quote}</blockquote>
            <div className="character" title="" style={{backgroundColor: bgColors[backgroundIndex]}}>{quotes[randomQuoteIndex].author}</div>

            <div className="App">
            <button onClick={randomQuote} style={{backgroundColor: bgColors[backgroundIndex]}}><i className="fa-solid fa-arrows-rotate"></i></button>
            </div>
        </div>
    );
} ;

export default Quotes;