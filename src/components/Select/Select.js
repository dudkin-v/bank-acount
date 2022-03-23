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
          background-color: ${colors.rhino};
        }
      }
      svg {
        color: ${colors.rhino};
      }
      .css-1s2u09g-control {
        background: none;
        border: 1px solid ${colors.rhino};
        border-radius: 3px;
      }
      .css-qc6sy-singleValue {
        color: ${colors.rhino};
      }
      .css-4ljt47-MenuList {
        display: flex;
        flex-direction: column;
        background-color: rgba(128, 128, 128, 0.3);
        border: 1px solid ${colors.rhino};
        border-radius: 3px;
        div {
          color: ${colors.rhino};
            cursor: pointer;
        }
        .css-9gakcf-option,
        .css-1n7v3ny-option {
          color: ${colors.rhino};
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
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Select;
