import React, { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ question, answer }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}>
            <div className='card-inner'>
                <div className='card-front'>
                    <span className='card-hint'>Question</span>
                    <p>{question}</p>
                </div>
                <div className='card-back'>
                    <span className='card-hint'>Answer</span>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}