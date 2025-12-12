import { ArrowLeft, ArrowRight } from 'lucide-react';

const QuizNavigation = ({
    goBack,
    goForward,
    cannotGoBack,
    cannotGoForward,
    isFinalQuestion,
    onSubmit
}) => {
    // This component handles the movement between questions.
    // It shows Back/Next arrows or a Submit button at the end.

    return (
        <div className="nav-buttons">
            {isFinalQuestion ? (
                // If we are at the end, show the Submit button
                <button
                    className="nav-btn"
                    onClick={onSubmit}
                    disabled={cannotGoForward}
                    style={{ width: 'auto', padding: '0 1rem', gap: '0.5rem' }}
                >
                    Submit
                </button>
            ) : (
                // Otherwise, show navigation arrows
                <>
                    <button
                        className="nav-btn"
                        onClick={goBack}
                        disabled={cannotGoBack}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        className="nav-btn"
                        onClick={goForward}
                        disabled={cannotGoForward}
                    >
                        <ArrowRight size={20} />
                    </button>
                </>
            )}
        </div>
    );
};

export default QuizNavigation;
