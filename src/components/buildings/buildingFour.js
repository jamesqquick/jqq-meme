import React from 'react';
import PropTypes from 'prop-types';

const BuildingFour = ({ className }) => (
  <svg
    width="163"
    height="348"
    viewBox="0 0 163 348"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.4545 0L163 24.4378V348H0V19.5008L44.4545 0Z"
      fill="black"
    />
  </svg>
);

BuildingFour.propTypes = {
  className: PropTypes.string,
};
export { BuildingFour };
