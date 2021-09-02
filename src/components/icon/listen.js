import PropTypes from 'prop-types';

const Listen = ({ className, height, width }) => (
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
      d="M13.9553 5.94024C13.8935 6.002 13.8935 6.12553 13.8317 6.24907L24.8877 13.2286C25.6289 12.5491 26.2466 11.7462 26.6172 10.6962C27.8525 7.36084 25.9995 3.59315 22.4789 2.29608C19.02 0.937235 15.1906 2.6049 13.9553 5.94024ZM12.7199 12.055C12.7199 12.055 8.51989 20.9492 5.80221 27.0023C5.80221 27.0023 4.62866 28.9788 6.23457 29.9052C7.84047 30.8317 9.19931 29.1023 9.19931 29.1023L19.8847 16.3786L12.7199 12.055ZM13.5229 7.48437C13.2141 8.90498 13.0288 9.46087 13.3994 10.6344L20.873 15.2051C21.6759 15.1433 23.0348 14.3403 23.7142 13.9697L13.5229 7.48437Z"
    />
  </svg>
);

Listen.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Listen.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Listen };
