import PropTypes from 'prop-types';
import { GrDislike, GrLike } from 'react-icons/gr';
import { BsEmojiNeutralFill } from 'react-icons/bs';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({
  onLeaveFeedback: { increaseGood, increaseBad, increaseNeutral },
}) => {
  return (
    <div className={css.btnWrapper}>
      <button className={css.btn} onClick={increaseGood}>
        <GrLike size="20" />
        <span className={css.btnText}>Good</span>
      </button>

      <button className={css.btn} onClick={increaseNeutral}>
        <BsEmojiNeutralFill fill="#005247" size="20" />
        <span className={css.btnText}>Neutral</span>
      </button>

      <button className={css.btn} onClick={increaseBad}>
        <GrDislike size="20" />
        <span className={css.btnText}>Bad</span>
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    increaseGood: PropTypes.func,
    increaseBad: PropTypes.func,
    increaseNeutral: PropTypes.func,
  }),
};

export default FeedbackOptions;
