import { Section } from './Layout/Section';
// import { Statistic } from './Feedback/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  return (
    <Section title="Please leave feedback">
      {/* <Statistic defaultValue={0} /> */}
      <FeedbackOptions />
    </Section>
  );
};
