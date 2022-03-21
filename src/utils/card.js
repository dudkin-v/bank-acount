export const cardTypes = {
  VISA: "visa",
  MASTERCARD: "mastercard",
};

export const getCardType = (cardNumberOrType) => {
  if (cardNumberOrType.startsWith("4") || cardNumberOrType === "visa") {
    return cardTypes.VISA;
  }
  if (cardNumberOrType.startsWith("5") || cardNumberOrType === "mastercard") {
    return cardTypes.MASTERCARD;
  }
  return "";
};
