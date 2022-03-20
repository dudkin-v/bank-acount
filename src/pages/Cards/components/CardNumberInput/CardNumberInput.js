import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  input {
    font-size: 18px;
    font-weight: bold;
    color: white;
    padding: 5px;
    border: none;
    outline: none;
    width: 55px;
    background: none;
  }
`;

const CardNumberInput = ({ setCardNumber }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  const handleChange =
    (inputOnChange, next, prev) =>
    ({ target: { value } }) => {
      if (value.length <= 4) {
        inputOnChange(value);
      }
      if (next && value.length === 4) {
        next.current.focus();
      }
      if (prev && value.length === 0) {
        prev.current.focus();
      }
      if (value.length === 5 && next) {
        next.current.focus();
        // eslint-disable-next-line no-param-reassign,prefer-destructuring
        next.current.value = value[4];
      }
    };

  useEffect(() => {
    setCardNumber(input1 + input2 + input3 + input4);
  }, [input1, input2, input3, input4]);

  return (
    <Container>
      <input
        type="tel"
        value={input1}
        name={input1}
        onChange={handleChange(setInput1, inputRef2, null)}
        ref={inputRef1}
        placeholder="0000"
      />
      <input
        type="tel"
        value={input2}
        name={input2}
        onChange={handleChange(setInput2, inputRef3, inputRef1)}
        ref={inputRef2}
        placeholder="0000"
      />
      <input
        type="tel"
        value={input3}
        name={input3}
        onChange={handleChange(setInput3, inputRef4, inputRef2)}
        ref={inputRef3}
        placeholder="0000"
      />
      <input
        type="tel"
        value={input4}
        name={input4}
        onChange={handleChange(setInput4, null, inputRef3)}
        ref={inputRef4}
        placeholder="0000"
      />
    </Container>
  );
};

CardNumberInput.propTypes = {
  setCardNumber: PropTypes.func.isRequired,
};

export default CardNumberInput;
