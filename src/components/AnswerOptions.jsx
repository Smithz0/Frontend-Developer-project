
const AnswerOptions = ({ choices, userChoice, handleUserSelection }) => {
    // Renders the list of possible answers for the user to choose from.
    return (
        <div className="options-grid">
            {choices.map((option, index) => (
                <button
                    key={index}
                    // Highlight the button if it's the one the user picked
                    className={`option-btn ${userChoice === option ? 'selected' : ''}`}
                    onClick={() => handleUserSelection(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default AnswerOptions;
