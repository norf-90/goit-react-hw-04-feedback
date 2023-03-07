import PropTypes from 'prop-types';
import { GrDislike, GrLike } from 'react-icons/gr';
import { BsEmojiNeutralFill } from 'react-icons/bs';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onLeaveFeedback: { onGoodFeedback, onBadFeedback, onNeutralFeedback },
}) => {
  return (
    <div className={css.btnWrapper}>
      <button className={css.btn} onClick={onGoodFeedback}>
        <GrLike size="20" />
        <span className={css.btnText}>Good</span>
      </button>

      <button className={css.btn} onClick={onNeutralFeedback}>
        <BsEmojiNeutralFill fill="#005247" size="20" />
        <span className={css.btnText}>Neutral</span>
      </button>

      <button className={css.btn} onClick={onBadFeedback}>
        <GrDislike size="20" />
        <span className={css.btnText}>Bad</span>
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    onGoodFeedback: PropTypes.func,
    onBadFeedback: PropTypes.func,
    onNeutralFeedback: PropTypes.func,
  }),
};

export default FeedbackOptions;
