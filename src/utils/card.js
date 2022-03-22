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
