import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { onSignUP } from "../../store/login/thunk";

import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { AuthorizationPage } from "../components/AuthorizationPage";

import routes from "../../utils/routes";
import { signUpValidationSchema } from "../../utils/validation";

const formInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  policy: false,
};

const SingIn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((rootStore) => rootStore.login.loading);
  const { t } = useTranslation();

  const onSignUp = (values) => dispatch(onSignUP(values));

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: onSignUp,
  });

  return (
    <AuthorizationPage>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-section">
          <InputField
            label={t("inputs.labels.firstName")}
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            errorMessage={t(formik.errors.firstName)}
            touched={formik.touched.firstName}
          />
          <InputField
            label={t("inputs.labels.lastName")}
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            errorMessage={t(formik.errors.lastName)}
            touched={formik.touched.lastName}
          />
        </div>
        <InputField
          label={t("inputs.labels.email")}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          errorMessage={t(formik.errors.email)}
          touched={formik.touched.email}
        />
        <div className="input-section">
          <InputField
            label={t("inputs.labels.password")}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            secure
            errorMessage={t(formik.errors.password)}
            touched={formik.touched.password}
          />
          <InputField
            label={t("inputs.labels.confirmPassword")}
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            secure
            errorMessage={t(formik.errors.confirmPassword)}
            touched={formik.touched.confirmPassword}
          />
        </div>
        <div className="privacy-policy">
          <input
            type="checkbox"
            name="policy"
            id="policy"
            value={formik.values.policy}
            onChange={formik.handleChange}
          />
          <p>{t("loginPage.privacyPolicy")}</p>
        </div>
        <div className="form-button">
          <Button
            type="submit"
            text={t("buttons.signUp")}
            disabled={!formik.isValid}
            isLoading={isLoading}
          />
        </div>
      </form>
      <div className="redirect-block">
        <p>{t("loginPage.description.signUp")}</p>
        <Link to={routes.SIGN_IN}>{t("loginPage.links.signIn")}</Link>
      </div>
    </AuthorizationPage>
  );
};

export default SingIn;
