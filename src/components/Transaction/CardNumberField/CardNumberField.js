import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import colors from "../../../utils/colors";

const Container = styled.div`
  position: relative;
  .card-number {
    display: flex;
    border-radius: 5px;
    padding: 8px;
    margin: 5px 0 15px;
    outline: none;
    box-shadow: 0 1px 3px 0 ${colors.royalBlue};

    .placeholder {
      color: ${colors.gray};
      font-size: 16px;
      position: absolute;
    }
    input {
      color: ${colors.royalBlue};
      font-size: 16px;
      width: 40px;
      margin-right: 5px;
      outline: none;
    }
  }
  .error-message {
    position: absolute;
    top: 3px;
    right: 0;
    font-size: 12px;
    color: ${colors.error};
  }
  .label {
    font-size: 16px;
    color: ${colors.royalBlue};
    cursor: pointer;
  }
`;

const CardNumberField = ({ handleChange, errorMessage }) => {
  const { t } = useTranslation();
  const [isVisiblePlaceholder, setVisiblePlaceholder] = useState(true);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const valueRef1 = useRef();
  const valueRef2 = useRef();
  const valueRef3 = useRef();
  const valueRef4 = useRef();

  const onChange =
    (valueOnChange, next, prev) =>
    ({ target: { value } }) => {
      if (value.length <= 4) {
        valueOnChange(value);
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

  const toStart = () => {
    valueRef1.current.focus();
  };
  const onStopPropagation = (event) => event.stopPropagation();

  useEffect(() => {
    handleChange(value1 + value2 + value3 + value4);
  }, [value1, value2, value3, value4]);

  useEffect(() => {
    if (value1 || value2 || value3 || value4) {
      setVisiblePlaceholder(false);
    } else {
      setVisiblePlaceholder(true);
    }
  }, [value1, value2, value3, value4]);

  return (
    <Container onClick={toStart}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="label">{t("transaction.to")}</p>
      <div className="card-number">
        {isVisiblePlaceholder && (
          <p className="placeholder">{t("transaction.inputPlaceholder")}</p>
        )}
        <input
          onClick={onStopPropagation}
          type="tel"
          value={value1}
          name={value1}
          onChange={onChange(setValue1, valueRef2, null)}
          ref={valueRef1}
        />
        <input
          onClick={onStopPropagation}
          type="tel"
          value={value2}
          name={value2}
          onChange={onChange(setValue2, valueRef3, valueRef1)}
          ref={valueRef2}
        />
        <input
          onClick={onStopPropagation}
          type="tel"
          value={value3}
          name={value3}
          onChange={onChange(setValue3, valueRef4, valueRef2)}
          ref={valueRef3}
        />
        <input
          onClick={onStopPropagation}
          type="tel"
          value={value4}
          name={value4}
          onChange={onChange(setValue4, null, valueRef3)}
          ref={valueRef4}
        />
      </div>
    </Container>
  );
};

CardNumberField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

CardNumberField.defaultProps = {
  errorMessage: undefined,
};

export default CardNumberField;
