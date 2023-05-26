import { Section } from './Layout/Section';
import { Statistic } from './Feedback/Statistic';

export const App = () => {
  return (
    <Section title="Please leave feedback">
      <Statistic defaultValue={0} />;
    </Section>
  );
};
