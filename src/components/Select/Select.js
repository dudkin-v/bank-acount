import PropTypes from "prop-types";
import styled from "styled-components";
import ReactSelect from "react-select";
import colors from "../../utils/colors";

const Container = styled.div`
    .select {
      min-width: 150px;
      input {
        display: none;
      }
      .css-1hb7zxy-IndicatorsContainer {
        span {
          background-color: ${colors.royalBlue};
        }
      }
      svg {
        color: ${colors.royalBlue};
        cursor: pointer;
      }
      .css-1s2u09g-control {
        background: none;
        border: 1px solid ${colors.royalBlue};
        border-radius: 5px;
      }
      .css-qc6sy-singleValue {
        color: ${colors.royalBlue};
      }
      .css-4ljt47-MenuList {
        display: flex;
        flex-direction: column;
        background-color: white;
        border: 1px solid ${colors.royalBlue};
        border-radius: 5px;
        outline: none;
        div {
          color: ${colors.royalBlue};
            cursor: pointer;
        }
        .css-9gakcf-option,
        .css-1n7v3ny-option {
          font-weight: bold;
          background: none;
        }
      }
    }
  }`;

const Select = ({ options, onChange, placeholder }) => (
  <Container>
    <ReactSelect
      options={options}
      onChange={onChange}
      className="select"
      placeholder={placeholder}
    />
  </Container>
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }).isRequired
  ),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Select.defaultProps = {
  options: undefined,
};

export default Select;
