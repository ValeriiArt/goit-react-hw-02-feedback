import React, { Component } from "react";
import Section from "./Section";
import Notification from './Notification'
import FeedbackOptions from "./FeedbackOptions";
import Statistics  from "./Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positivePercentage: 0,
  };
 
  
  handleOnClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1.
      };
    });
  };

  // handleGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     }
  //   })
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  // handleNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     }
  //   })
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  // handleBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     }
  //   })
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  // countTotalFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       total: prevState.good + prevState.neutral + prevState.bad,
  //     }
  //   })
  // };

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => {
  //     return {
  //       positivePercentage: prevState.good * 100 / prevState.total,
  //     }
  //   })
  // };

  

  render() {
    const total = Object.values(this.state).reduce(
      (sum, current) => sum + current,
      0
    );
    const countPositiveFeedbackPercentage = this.state.good * 100 / total;
    const optionsName = Object.keys(this.state);
    const optionsStatistics = Object.values(this.state);
    console.log("Імя:", optionsName);
    console.log("значення:", optionsStatistics);
    // const { good, neutral, bad} = this.state;
      return (
        <div>
        
          <Section
            title="Please leave feedback">
            <FeedbackOptions
              options={optionsName}
              onLeaveFeedback={this.handleOnClick}
            /> 
         </Section>

          <Section title="Statistics">
            {total !== 0 ? <Statistics
              name={optionsName}
              options={optionsStatistics}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            /> : <Notification
              message="There is no feedback" />
            }
          </Section>
            

          {/* <button
            type="button"
            onClick={this.handleGood}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.handleNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.handleBad}
          >
            Bad
          </button> */}

        </div>
      )
  };
};
