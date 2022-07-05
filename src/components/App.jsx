import { Component } from "react";
import Statistics from './Expresso/Statistics'
import Section from "./Expresso/Section";
import FeedbackOptions from "./Expresso/FeedbackOptions";
import Notification from "./Expresso/Notification";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countFeedback = (value) => {
    console.log(value)
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let totalFeedback = good + neutral + bad;
    return totalFeedback

  };
  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
    let percentageFeedback = total !== 0 ? Math.round((good * 100) / this.countTotalFeedback()) : 0;
    return percentageFeedback
  };

  render() {
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <div className="wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.countFeedback} />
        </Section>
        <Section title="Statistics">
          {total !== 0
            ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={percentage} />
            : <Notification message="There is no feedback"></Notification>
          }
        </Section>
      </div>
    )
  }
}

export default App; 