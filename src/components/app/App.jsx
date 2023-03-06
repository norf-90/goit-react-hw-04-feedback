import React, { Component } from 'react';

// reexport from './app/index.js'
import { Section } from '.';
import { Statistics } from '.';
import { FeedbackOptions } from '.';
import { Notification } from '.';

import css from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGood = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  increaseNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  increaseBad = () => this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? `${((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)} %`
      : `0`;

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={{
              increaseGood: this.increaseGood,
              increaseBad: this.increaseBad,
              increaseNeutral: this.increaseNeutral,
            }}
          />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
