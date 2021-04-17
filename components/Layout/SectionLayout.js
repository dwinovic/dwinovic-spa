import PropTypes from 'prop-types';

export default function SectionLayout({ children, addClass }) {
  return (
    <section className={`py-14 ${addClass}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

SectionLayout.propTypes = {
  addClass: PropTypes.string || propTypes.number,
};
