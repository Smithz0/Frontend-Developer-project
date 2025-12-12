
const QuizProgress = ({ currentStep, totalSteps }) => {
    // Shows a visual progress bar indicating how far the user is in the quiz.
    return (
        <div className="progress-container">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                    key={index}
                    // Mark segments as active if they are past or current
                    className={`progress-segment ${index <= currentStep ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default QuizProgress;
