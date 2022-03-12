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
  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: (values) => console.log(values),
  });

  return (
    <AuthorizationPage>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-section">
          <InputField
            type="text"
            label="First Name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <InputField
            type="text"
            label="Last Name"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <InputField
          type="text"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="input-section">
          <InputField
            type="text"
            label="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <InputField
            type="text"
            label="Confirm password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
        </div>
        <div className="privacy-policy">
          <input type="checkbox" name="privacy-policy" id="privacy-policy" />
          <p>
            Yes, I understand and agree to Bank Apps Terms of Service, including
            the User Agreement and Privacy Policy.
          </p>
        </div>
        <div className="form-button">
          <Button type="submit" text="Submit" />
        </div>
      </form>
      <div className="redirect-block">
        <p>Already have an account?</p>
        <Link to={routes.SIGN_IN}>Sing in.</Link>
      </div>
    </AuthorizationPage>
  );
};

export default SingIn;
