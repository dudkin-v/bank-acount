import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import colors from "../../../../utils/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
    flex-wrap: wrap;
    width: 20px;
    color: ${colors.ebb};
    font-size: 6px;
    font-weight: bold;
    line-height: 7px;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.ebb};
  }
  input {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    color: white;
    padding: 5px;
    border: none;
    outline: none;
    width: 30px;
    background: none;
  }
`;

const ExpiredDateInput = ({ onChangeExpiredMonth, onChangeExpiredYear }) => {
  const [monthInputValue, setMonthInputValue] = useState("");
  const [yearInputValue, setYearInputValue] = useState("");

  const monthRef = useRef();
  const yearRef = useRef();

  const handleChange =
    (inputOnchange, next, prev) =>
    ({ target: { value } }) => {
      if (value.length <= 2) {
        inputOnchange(value);
      }
      if (next && value.length === 2) {
        next.current.focus();
      }
      if (prev && value.length === 0) {
        prev.current.focus();
      }
      if (value.length === 3 && next) {
        next.current.focus();
        // eslint-disable-next-line no-param-reassign,prefer-destructuring
        next.current.value = value[2];
      }
    };

  useEffect(() => {
    onChangeExpiredMonth(monthInputValue);
    onChangeExpiredYear(yearInputValue);
  }, [monthInputValue, yearInputValue]);

  return (
    <Container>
      <p>VALID THRU</p>
      <input
        type="tel"
        value={monthInputValue}
        name={monthInputValue}
        onChange={handleChange(setMonthInputValue, yearRef, null)}
        ref={monthRef}
        placeholder="00"
      />
      <span>/</span>
      <input
        type="tel"
        value={yearInputValue}
        name={yearInputValue}
        onChange={handleChange(setYearInputValue, null, monthRef)}
        ref={yearRef}
        placeholder="00"
      />
    </Container>
  );
};

ExpiredDateInput.propTypes = {
  onChangeExpiredMonth: PropTypes.func.isRequired,
  onChangeExpiredYear: PropTypes.func.isRequired,
};

export default ExpiredDateInput;
