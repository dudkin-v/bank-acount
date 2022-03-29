import moment from "moment";

export const cardTypes = {
  VISA: "visa",
  MASTERCARD: "mastercard",
};

export const getCardType = (cardNumber) => {
  if (cardNumber.startsWith("4")) {
    return cardTypes.VISA;
  }
  if (cardNumber.startsWith("5")) {
    return cardTypes.MASTERCARD;
  }
  return null;
};

export const splitCardNumber = (cardNumber) =>
  cardNumber
    .split("")
    .reduce(
      (acc, cur, index) =>
        `${acc}${index % 4 === 0 && index ? ` ${cur}` : cur}`,
      ""
    );

export const getPrice = (price) => {
  if (!price) {
    return null;
  }
  if (price.toString().includes(".")) {
    return (
      <p className="price">
        {price.toString().split(".")[0]}.
        <span>{price.toString().split(".")[1]}</span>
        <span>UAH</span>
      </p>
    );
  }
  if (!price.toString().includes(".")) {
    return (
      <p className="price">
        {price}.<span>00</span>
        <span>UAH</span>
      </p>
    );
  }
  return null;
};

export const getDate = (date) =>
  `${moment(date).format("DD.MM.YY")} ${moment(date).format("HH:mm")}`;
