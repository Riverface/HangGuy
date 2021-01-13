import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export function LetterInput() {
    return (
        <div className="HangGuyWindow">
            <GuessBox />
            <HangGuy />
            <HangStart />
        </div>
    )
}