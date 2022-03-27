import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "inputs.errors.firstName.minLength")
    .max(20, "inputs.errors.firstName.maxLength")
    .required("inputs.errors.firstName.required"),
  lastName: Yup.string()
    .min(2, "inputs.errors.lastName.minLength")
    .max(20, "inputs.errors.lastName.maxLength")
    .required("inputs.errors.lastName.required"),
  email: Yup.string()
    .email("inputs.errors.email.isEmail")
    .required("inputs.errors.email.required"),
  password: Yup.string()
    .min(5, "inputs.errors.password.minLength")
    .required("inputs.errors.password.required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "inputs.errors.password.confirmPassword"
  ),
  policy: Yup.boolean().oneOf([true]),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("inputs.errors.email.isEmail")
    .required("inputs.errors.email.required"),
  password: Yup.string()
    .min(5, "inputs.errors.password.minLength")
    .required("inputs.errors.password.required"),
});

export const transactionValidationSchema = Yup.object().shape({
  senderCard: Yup.string().required("inputs.errors.card.required"),
  recipientCard: Yup.string()
    .length(16, "inputs.errors.card.invalid")
    .required("inputs.errors.card.required"),
  price: Yup.number()
    .required("inputs.errors.price.required")
    .min(1, "inputs.errors.price.invalid")
    .typeError("inputs.errors.price.invalid"),
});
