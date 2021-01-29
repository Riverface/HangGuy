export const correctGuess = (guess) => {
    const {letter, wrongGuesses, exposedWord} = guess;
    return{
        type:"RIGHT_GUESS",
        letter,
        exposedWord
    } 
}

export const wrongGuess = (guess) => {
    const {letter, wrongGuesses, exposedWord} = guess;
    return{
        type:"WRONG_GUESS",
        letter,
        wrongGuesses
    } 
}

export const addGuess = (guess) => {
    const {letter, wrongGuesses, exposedWord} = guess;
    return{
        type:"ADD_GUESS",
        letter,
        wrongGuesses
    } 
}
