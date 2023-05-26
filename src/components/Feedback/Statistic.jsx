import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistic extends Component {
  static propTypes = {
    defaultValue: PropTypes.number,
  };
  state = {
    counterGood: this.props?.defaultValue ?? 0,
    counterNeutral: this.props?.defaultValue ?? 0,
    counterBad: this.props?.defaultValue ?? 0,
  };

  handleUpdate = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        this.setState(prevState => ({
          counterGood: prevState.counterGood + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          counterNeutral: prevState.counterNeutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          counterBad: prevState.counterBad + 1,
        }));
        break;
      default:
        throw new Error('Unmatched name');
    }
  };
  countTotalFeedback = (counterGood, counterNeutral, counterBad) => {
    return counterGood + counterNeutral + counterBad;
  };
  countPositiveFeedbackPercentage = (counterGood, countTotalFeedback) => {
    if (countTotalFeedback > 0) {
      return parseInt((counterGood / countTotalFeedback) * 100);
    }
    return 0;
  };
  // handlePlusGood = () => {
  //   this.setState(prevState => ({ counterGood: prevState.counterGood + 1 }));
  // };

  // handlePlusNeutral = () => {
  //   this.setState(prevState => ({
  //     counterNeutral: prevState.counterNeutral + 1,
  //   }));
  // };
  // handlePlusBad = () => {
  //   this.setState(prevState => ({ counterBad: prevState.counterBad + 1 }));
  // };

  render() {
    const { counterGood } = this.state;
    const { counterNeutral } = this.state;
    const { counterBad } = this.state;
    return (
      <div>
        <h1>Pleese leave feetback </h1>

        {counterGood}
        <button name="good" onClick={this.handleUpdate}>
          Good
        </button>

        {counterNeutral}
        <button name="neutral" onClick={this.handleUpdate}>
          Neutral
        </button>

        {counterBad}
        <button name="bad" onClick={this.handleUpdate}>
          Bad
        </button>

        <h2>Statistics:</h2>
        <ul>
          <li>Good: {counterGood}</li>
          <li>Neutral: {counterNeutral}</li>
          <li>Bad: {counterBad}</li>
          <li>
            Total:{' '}
            {this.countTotalFeedback(counterGood, counterNeutral, counterBad)}
          </li>
          <li>
            Positive:
            {this.countPositiveFeedbackPercentage(
              counterGood,
              this.countTotalFeedback(counterGood, counterNeutral, counterBad)
            )}
            %
          </li>
        </ul>
      </div>
    );
  }
}
