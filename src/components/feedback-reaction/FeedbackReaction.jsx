import PropTypes from 'prop-types';
import css from './FeedbackReaction.module.css';

const FeedbackReaction = ({ gifUrl }) => (
  <img className={css.reactionGif} src={gifUrl} alt="Gomer's reaction" />
);

Notification.propTypes = {
  gifUrl: PropTypes.string.isRequired,
};

export default FeedbackReaction;
