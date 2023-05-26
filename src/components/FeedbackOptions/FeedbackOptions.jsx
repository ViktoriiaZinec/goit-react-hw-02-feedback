import { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/Statistics';

export class FeedbackOptions extends Component {
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
  render() {
    const { counterGood } = this.state;
    const { counterNeutral } = this.state;
    const { counterBad } = this.state;
    return (
      <div>
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
        <Statistics
          counterGood={counterGood}
          counterNeutral={counterNeutral}
          counterBad={counterBad}
        />
      </div>
    );
  }
}
