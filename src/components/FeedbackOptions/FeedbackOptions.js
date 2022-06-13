import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(key => (
            <button
                className={s.button}
                type="button"
                key={key}
                onClick={() => { onLeaveFeedback(key) }}
            >
                {key}
            </button>
        ))
    )     
};


export default FeedbackOptions;