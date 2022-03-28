import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/colors";

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: rgba(252, 46, 32, 0.05);
  border-radius: 15px;
  border: 1px solid ${colors.error};
  p {
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: ${colors.error};
  }
`;

const Error = ({ errorMessage }) => (
  <ErrorMessage className="error-message">
    <p>{errorMessage}</p>
  </ErrorMessage>
);

Error.propTypes = {
  errorMessage: PropTypes.string,
};

Error.defaultProps = {
  errorMessage: undefined,
};

export default Error;
