import PropTypes from 'prop-types';

const BuildingFive = ({ className }) => (
  <svg
    width="96"
    height="198"
    viewBox="0 0 96 198"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.1818 0L96 21.3453V197.5H0V17.0331L26.1818 0Z"
      fill="black"
    />
  </svg>
);

BuildingFive.propTypes = {
  className: PropTypes.string,
};

export { BuildingFive };
