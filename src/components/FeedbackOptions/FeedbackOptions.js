import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;