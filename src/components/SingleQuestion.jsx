
const SingleQuestion = ({ questionData }) => {
    // Displays the text of the current question.
    return (
        <div className="question-box">
            {questionData.id}. {questionData.questionText}
        </div>
    );
};

export default SingleQuestion;
