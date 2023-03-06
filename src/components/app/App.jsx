import { useState } from 'react';
import { Section, Statistics, FeedbackOptions, Notification } from '.';
import css from './App.module.css';

const App = () => {
  const [goodFeedbacks, setGoodFeedbacks] = useState(0);
  const [neutralFeedbacks, setNeutralFeedbacks] = useState(0);
  const [badFeedbacks, setBadFeedbacks] = useState(0);

  const countTotalFeedback = () => {
    return goodFeedbacks + neutralFeedbacks + badFeedbacks;
  };

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback()
      ? `${((goodFeedbacks / countTotalFeedback()) * 100).toFixed(0)} %`
      : `0`;

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={{
            increaseGood: () => setGoodFeedbacks(goodFeedbacks + 1),
            increaseBad: () => setNeutralFeedbacks(neutralFeedbacks + 1),
            increaseNeutral: () => setBadFeedbacks(badFeedbacks + 1),
          }}
        />
      </Section>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={goodFeedbacks}
            neutral={neutralFeedbacks}
            bad={badFeedbacks}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
