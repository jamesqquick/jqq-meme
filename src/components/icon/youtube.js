import PropTypes from 'prop-types';

const Youtube = ({ className, height, width }) => (
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
      d="M28.775 7.925C27.9875 6.525 27.2 6.2625 25.5375 6.175C23.875 6.0875 19.675 6 16 6C12.325 6 8.125 6.0875 6.4625 6.175C4.8 6.2625 3.925 6.525 3.225 7.925C2.4375 9.2375 2 11.6 2 15.8C2 19.9125 2.4375 22.275 3.225 23.675C4.0125 25.075 4.8 25.3375 6.4625 25.425C8.125 25.5125 12.325 25.6 16 25.6C19.675 25.6 23.875 25.5125 25.5375 25.425C27.2 25.3375 28.075 25.075 28.775 23.675C29.5625 22.275 30 19.9125 30 15.8C30 11.6 29.5625 9.2375 28.775 7.925ZM13.2 20.875V10.6375L21.1625 15.8L13.2 20.875Z"
    />
  </svg>
);

Youtube.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Youtube.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Youtube };
