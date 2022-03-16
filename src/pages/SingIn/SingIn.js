import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { AuthorizationPage } from "../components/AuthorizationPage";

import routes from "../../utils/routes";

const formInitialValues = {
  email: "",
  password: "",
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
        <InputField
          label={t("inputs.labels.email")}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <InputField
          label={t("inputs.labels.password")}
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="form-button">
          <Button type="submit" text={t("buttons.signIn")} />
        </div>
      </form>
      <div className="redirect-block">
        <Link to={routes.SIGN_UP}>{t("loginPage.links.signUp")}</Link>
      </div>
    </AuthorizationPage>
  );
};

export default SingIn;
