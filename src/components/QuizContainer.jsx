import { useState } from 'react';
import { quizQuestions } from '../data/questions';
import AnswerOptions from './AnswerOptions';
import QuizNavigation from './QuizNavigation';
import QuizProgress from './QuizProgress';
import QuizResult from './QuizResult';
import SingleQuestion from './SingleQuestion';

const QuizContainer = () => {
    // State to track which question we are currently showing
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    // State to store the answers the user has selected so far
    const [userAnswers, setUserAnswers] = useState({});
    
    // State to toggle between the quiz and the result screen
    const [isQuizComplete, setIsQuizComplete] = useState(false);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const totalQuestions = quizQuestions.length;

    // Save the user's choice for the current question
    const saveUserAnswer = (option) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion.id]: option
        });
    };

    // Move to the next question if possible
    const moveToNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Go back to the previous question
    const moveToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Finish the quiz and show the results
    const finishQuiz = () => {
        setIsQuizComplete(true);
    };

    // Reset everything to start over
    const restartQuiz = () => {
        setUserAnswers({});
        setCurrentQuestionIndex(0);
        setIsQuizComplete(false);
    };

    // Calculate how many questions were answered correctly
    const calculateFinalScore = () => {
        let score = 0;
        quizQuestions.forEach((q) => {
            // Compare user answer with correct answer
            if (userAnswers[q.id] === q.correctAnswer) {
                score += 1;
            }
        });
        return score;
    };

    return (
        <div className="quiz-container">
            {!isQuizComplete ? (
                <>
                    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                        Test Your Knowledge
                    </h1>
                    <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
                        <span style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                            Answer all questions to see your results
                        </span>
                    </p>

                    <QuizProgress currentStep={currentQuestionIndex} totalSteps={totalQuestions} />

                    <div key={currentQuestionIndex} className="fade-in">
                        <SingleQuestion questionData={currentQuestion} />
                    </div>

                    <AnswerOptions
                        choices={currentQuestion.answerOptions}
                        userChoice={userAnswers[currentQuestion.id]}
                        handleUserSelection={saveUserAnswer}
                    />

                    <QuizNavigation
                        goBack={moveToPreviousQuestion}
                        goForward={moveToNextQuestion}
                        onSubmit={finishQuiz}
                        cannotGoBack={currentQuestionIndex === 0}
                        cannotGoForward={!userAnswers[currentQuestion.id]}
                        isFinalQuestion={currentQuestionIndex === totalQuestions - 1}
                    />
                </>
            ) : (
                <QuizResult
                    finalScore={calculateFinalScore()}
                    questionCount={totalQuestions}
                    startAgain={restartQuiz}
                />
            )}

            {/* Cat Decoration to make it cute */}
            {!isQuizComplete && (
                <div style={{ position: 'absolute', bottom: '-20px', left: '-60px' }}>
                    <div className="speech-bubble">
                        Best of Luck!
                    </div>
                    <img
                        src="https://media.tenor.com/qzqVqkaWW9IAAAAj/cat-cute.gif"
                        alt="Cute Cat"
                        style={{ width: '100px', borderRadius: '0 0 10px 10px' }}
                    />
                </div>
            )}
        </div>
    );
};

export default QuizContainer;
