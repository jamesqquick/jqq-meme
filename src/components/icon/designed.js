import PropTypes from 'prop-types';

const Designed = ({ className, height, width }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.89265 20.178L7.03789 21.266L17.6886 9.52726L17.4596 6.37784L24.0447 5.28986L27.7668 8.95464L26.3925 15.9979L22.785 15.1962L10.13 24.1864L11.3898 25.3316L27.2514 16.3414L30 3.40022L17.0588 5.57617L5.89265 20.178ZM7.83956 22.0677L9.32838 23.4419L22.0406 14.28L21.8688 10.6725H18.433L7.83956 22.0677ZM4.003 22.4112C2.3424 24.0718 1.94157 25.847 3.5449 27.5076C6.1217 30.0844 8.75576 27.1067 8.75576 27.1067L4.003 22.4112ZM5.32003 20.8079L4.69015 21.6096L9.50016 26.7059L10.5881 26.0187L5.32003 20.8079Z"
    />
  </svg>
);

Designed.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Designed.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Designed };
