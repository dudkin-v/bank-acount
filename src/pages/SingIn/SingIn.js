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
  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: (values) => console.log(values),
  });

  return (
    <AuthorizationPage>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          type="text"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <InputField
          type="text"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="form-button">
          <Button type="submit" text="Sing in" />
        </div>
      </form>
      <div className="redirect-block">
        <Link to={routes.SIGN_UP}>Or create account.</Link>
      </div>
    </AuthorizationPage>
  );
};

export default SingIn;
