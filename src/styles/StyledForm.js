import styled from 'styled-components';

export default styled.form`
  .field {
    margin-bottom: 24px;
    width: 100%;
    text-align: left;
    position: relative;
    z-index: 5;
  }

  .label,
  label {
    font-family: ${(props) => props.theme.peachyKeen};
    text-transform: uppercase;
    color: ${(props) => props.theme.black};
    display: block;
    font-size: 2.2rem;
    line-height: 3.2rem;
  }

  input[type='text'],
  input[type='email'] {
    background: url('/images/text-input.svg') left top no-repeat;
    background-size: 542px 77px;
    border: none;
    height: 77px;
    width: 502px;
    font-family: ${(props) => props.theme.comic};
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0 20px;
  }

  input[type='file'] {
    height: 120px;
    margin-top: -35px;
    width: 100%;
    font-family: ${(props) => props.theme.comic};
    text-transform: uppercase;
    font-style: italic;
    color: black;
    font-weight: bold;
    font-size: 1.8rem;

    &::-webkit-file-upload-button {
      visibility: hidden;
      display: none;
    }

    &:before {
      appearance: none;
      background: url('/images/file-upload.svg') left top no-repeat;
      background-size: 293px 79px;
      content: '';
      cursor: pointer;
      display: inline-block;
      width: 293px;
      height: 79px;
      margin-right: 15px;
      position: relative;
      top: 40px;
    }
  }
`;

export const DownloadButton = styled.a`
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.cadmiumYellow};
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.badaboom};
  text-decoration: none;
  font-size: 3rem;
  letter-spacing: 3px;
  padding: 20px 25px;

  &:hover {
    background: ${(props) => props.theme.cadmiumYellow};
    color: ${(props) => props.theme.carmineRed};
  }
`;
