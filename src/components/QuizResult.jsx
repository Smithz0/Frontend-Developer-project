import { useEffect, useState } from 'react';

const QuizResult = ({ finalScore, questionCount, startAgain }) => {
    // Calculates the percentage and animates the score display.
    const percentage = Math.round((finalScore / questionCount) * 100);
    const [displayScore, setDisplayScore] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const duration = 2000; // 2 seconds animation

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Ease out cubic function for smooth deceleration
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            setDisplayScore(Math.floor(easeOutCubic * percentage));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [percentage]);

    return (
        <div className="result-container">
            <div style={{ marginBottom: '1rem', color: '#4b5563', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                Keep Learning!
            </div>

            <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>Your Final score is</h2>

            <div className="score-display">
                {displayScore}<span className="score-percent">%</span>
            </div>

            <button
                onClick={startAgain}
                style={{
                    backgroundColor: '#bae6fd',
                    border: 'none',
                    padding: '0.75rem 2rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1e3a8a',
                    marginTop: '2rem'
                }}
            >
                Start Again
            </button>
        </div>
    );
};

export default QuizResult;
