export const correctGuess = (guess) => {
    const {guess, guessBox, exposedWord} = guess;
    return{
        type:"CORRECT_GUESS",
        guess,
        exposedWord
    } 
}

export const wrongGuess = (guess) => {
    const {guess, guessBox, exposedWord} = guess;
    return{
        type:"INCORRECT_GUESS",
        guess,
        guessBox
    } 
}
export const dupeGuess = (guess) => {
    const {guess, guessBox, exposedWord} = guess;
    return{
        type:"DUPE_GUESS",
        guess,
        guessBox
    } 
}
