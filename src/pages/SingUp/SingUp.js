import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { AuthorizationPage } from "../components/AuthorizationPage";

import routes from "../../utils/routes";

const formInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SingIn = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: (values) => console.log(values),
  });

  return (
    <AuthorizationPage>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-section">
          <InputField
            label={t("inputs.labels.firstName")}
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <InputField
            label={t("inputs.labels.lastName")}
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <InputField
          label={t("inputs.labels.email")}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="input-section">
          <InputField
            label={t("inputs.labels.password")}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            secure
          />
          <InputField
            label={t("inputs.labels.confirmPassword")}
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            secure
          />
        </div>
        <div className="privacy-policy">
          <input type="checkbox" name="privacy-policy" id="privacy-policy" />
          <p>{t("loginPage.privacyPolicy")}</p>
        </div>
        <div className="form-button">
          <Button type="submit" text={t("buttons.signUp")} />
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
