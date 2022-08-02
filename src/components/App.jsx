import { useState } from "react";
import Statistics from './Expresso/Statistics'
import Section from "./Expresso/Section";
import FeedbackOptions from "./Expresso/FeedbackOptions";
import Notification from "./Expresso/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutra] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCountFeedback = e => {
    const text = e.target.textContent;
    switch (text) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutra(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    let percentageFeedback = total !== 0 ? Math.round((good * 100) / total) : 0;
    return percentageFeedback;
  };

  const key = Object.keys({ good, neutral, bad });

  return (
    <div className="wrapper">
      <Section title="Please leave feedback">
        <FeedbackOptions options={key} onClick={handleCountFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0
          ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
          : <Notification message="There is no feedback"></Notification>
        }
      </Section>
    </div>
  )
}

// class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   countFeedback = (value) => {
//     console.log(value)
//     this.setState((prevState) => ({
//       [value]: prevState[value] + 1,
//     }))
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     let totalFeedback = good + neutral + bad;
//     return totalFeedback

//   };
//   countPositiveFeedbackPercentage = (total) => {
//     const { good } = this.state;
//     let percentageFeedback = total !== 0 ? Math.round((good * 100) / this.countTotalFeedback()) : 0;
//     return percentageFeedback
//   };

//   render() {
//     const keys = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage(total);
//     return (
      // <div className="wrapper">
      //   <Section title="Please leave feedback">
      //     <FeedbackOptions options={keys} onLeaveFeedback={this.countFeedback} />
      //   </Section>
      //   <Section title="Statistics">
      //     {total !== 0
      //       ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={percentage} />
      //       : <Notification message="There is no feedback"></Notification>
      //     }
      //   </Section>
      // </div>
//     )
//   }
// }

// export default App; 