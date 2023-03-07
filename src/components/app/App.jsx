import { useState, useEffect } from 'react';
import {
  Section,
  Statistics,
  FeedbackOptions,
  Notification,
  FeedbackReaction,
} from '.';
import css from './App.module.css';

const App = () => {
  const [goodFeedbacks, setGoodFeedbacks] = useState(0);
  const [neutralFeedbacks, setNeutralFeedbacks] = useState(0);
  const [badFeedbacks, setBadFeedbacks] = useState(0);
  const [lastFeedback, setLastFeedback] = useState(null);
  const [currentGif, setCurrentGif] = useState(null);

  useEffect(() => {
    switch (lastFeedback) {
      case 'good':
        setCurrentGif(
          'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTg1NWY4NTAzZmZkYjA1MGJiMTFlOGY1NGViYTc5MjAwZDQ1ZDczMiZjdD1z/IU4z4sZ3BZ3zO/giphy.gif'
        );
        break;

      case 'neutral':
        setCurrentGif(
          'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2E5MGMxYTU2NDVlMzEyZGE2NjdkNDM4MjUxYWRmNDgxYTQ1OWZkNiZjdD1z/G9Zh8sZYPrZho46lAh/giphy.gif'
        );
        break;

      case 'bad':
        setCurrentGif(
          'https://media2.giphy.com/media/l4FGGxnxDZw63bybS/giphy.gif?cid=ecf05e47cuu0ws0h8kbuox4si64i1o5t7q3sq5uxkacadh5u&rid=giphy.gif&ct=s'
        );
        break;

      default:
        return;
    }
  }, [lastFeedback]);

  const onGoodFeedback = () => {
    setGoodFeedbacks(goodFeedbacks + 1);
    setLastFeedback('good');
  };

  const onBadFeedback = () => {
    setNeutralFeedbacks(badFeedbacks + 1);
    setLastFeedback('bad');
  };

  const onNeutralFeedback = () => {
    setBadFeedbacks(neutralFeedbacks + 1);
    setLastFeedback('neutral');
  };

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
            onGoodFeedback,
            onBadFeedback,
            onNeutralFeedback,
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
      {currentGif && <FeedbackReaction gifUrl={currentGif} />}
    </div>
  );
};

export default App;
