import PropTypes from 'prop-types';

const Powered = ({ className, height, width }) => (
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
      d="M18.1249 2L10.2502 3.89574L7.2258 18.1426L15.1005 16.9936L13.6169 29L23.7742 10.617L14.0163 12.1106L18.1249 2Z"
    />
  </svg>
);

Powered.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Powered.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Powered };
