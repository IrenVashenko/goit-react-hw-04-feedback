const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map((item) => (
                <button key={item} onClick={() => onLeaveFeedback(item)}>{item}</button>
            ))}
        </ul>
    )
}

export default FeedbackOptions;