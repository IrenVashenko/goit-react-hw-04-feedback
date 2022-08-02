const FeedbackOptions = ({ options, onClick }) => {
    return (
        <ul>
            {options.map((item) => (
                <button key={item} onClick={onClick}>{item}</button>
            ))}
        </ul>
    )
}

export default FeedbackOptions;