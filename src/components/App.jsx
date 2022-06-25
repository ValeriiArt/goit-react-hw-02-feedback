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
  };
 
  
  handleOnClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1.
      };
    });
  };

  render() {
    const { good } = this.state;
    const total = Object.values(this.state).reduce(
      (sum, current) => sum + current,
      0
    );
    const countPositiveFeedbackPercentage = Math.round(good * 100 / total);
    const optionsName = Object.keys(this.state);
    const optionsStatistics = Object.values(this.state);
 
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
        </div>
      )
  };
};
