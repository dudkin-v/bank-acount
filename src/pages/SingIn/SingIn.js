import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { onSignIn } from "../../store/login/thunk";

import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { AuthorizationPage } from "../components/AuthorizationPage";

import routes from "../../utils/routes";
import { signInValidationSchema } from "../../utils/validation";

const formInitialValues = {
  email: "",
  password: "",
};

const SingIn = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogIn = (values) => dispatch(onSignIn(values));

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: signInValidationSchema,
    onSubmit: (values) => onLogIn(values),
  });

  return (
    <AuthorizationPage>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          label={t("inputs.labels.email")}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          touched={formik.touched.email}
          errorMessage={t(formik.errors.email)}
        />
        <InputField
          label={t("inputs.labels.password")}
          name="password"
          secure
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          touched={formik.touched.password}
          errorMessage={t(formik.errors.password)}
        />
        <div className="form-button">
          <Button
            type="submit"
            text={t("buttons.signIn")}
            disabled={!formik.isValid}
          />
        </div>
      </form>
      <div className="redirect-block">
        <Link to={routes.SIGN_UP}>{t("loginPage.links.signUp")}</Link>
      </div>
    </AuthorizationPage>
  );
};

export default SingIn;
