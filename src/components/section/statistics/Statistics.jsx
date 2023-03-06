import PropTypes from 'prop-types'; // ES6
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.text}>
        Good: <span className={css.textValue}>{good}</span>
      </p>
      <p className={css.text}>
        Neutral: <span className={css.textValue}>{neutral}</span>
      </p>
      <p className={css.text}>
        Bad: <span className={css.textValue}>{bad}</span>
      </p>
      <p className={css.text}>
        Total: <span className={css.textValue}>{total}</span>
      </p>
      <p className={css.text}>
        Positive feedback:{' '}
        <span className={css.textValue}>{positivePercentage}</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
