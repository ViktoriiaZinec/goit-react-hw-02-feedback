import { PropTypes } from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section title="">
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
};
