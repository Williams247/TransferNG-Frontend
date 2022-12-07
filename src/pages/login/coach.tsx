import { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { coachLoginSchema } from "../../utils/helpers/validations/login/coach";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/Auth";
import LayoutCard from "../../components/Card/LayoutCard";
import BackButton from "../../components/Buttons/BackButton";
import Text from "../../components/Input/Text";
import Button from "../../components/Buttons/Button";
import axios from "../../utils/axios";
import "./styles.scss";

const Login = (): JSX.Element => {
  const history = useNavigate();
  const [loginDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleNavigateBack = (): void => history(-1);
  const handleLoginCoach = async (values: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/coach/login", { ...values });
      toast.success(res.data.message);
      console.log(res);
      localStorage.setItem("authUser", res.data.result.token);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        <AuthLayout>
          <div>
            <LayoutCard>
              <div>
                <BackButton onClick={handleNavigateBack} />
                <div className="pb-10">
                  <p id="login" className="mt-5">
                    Log In to your
                    <br />
                    Account
                  </p>
                  <div className="mt-10 form-container">
                    <Formik
                      validationSchema={coachLoginSchema}
                      validateOnChange
                      validateOnBlur
                      initialValues={loginDetails}
                      onSubmit={handleLoginCoach}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isValid,
                        setFieldValue,
                        resetForm,
                      }) => (
                        <div>
                          <form onSubmit={handleSubmit}>
                            <div>
                              <div>
                                <p className="mb-3">Email Address</p>
                                <Text
                                  type="text"
                                  placeholder="Enter email adress"
                                  value={values.email}
                                  onChange={handleChange}
                                  name="email"
                                />
                                <p className="text-[red] mt-3 text-sm">
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </p>
                              </div>
                              <div className="mt-7">
                                <p className="mb-3">Password</p>
                                <Text
                                  type="password"
                                  placeholder="Password"
                                  value={values.password}
                                  onChange={handleChange}
                                  name="password"
                                />
                                <p className="text-[red] mt-3 text-sm">
                                  {errors.password &&
                                    touched.password &&
                                    errors.password}
                                </p>
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="float-right mt-5"
                                >
                                  Forgot Password?
                                </button>
                              </div>
                              <div className="flex justify-center mt-28">
                                <Button
                                  label="Log in"
                                  customedClasses="py-5 px-28"
                                  loading={loading}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
                    </Formik>

                    <div className="flex justify-center mt-14">
                      <p>
                        Don't have an Account?{" "}
                        <span
                          onClick={() => history("/sign-up/coach")}
                          className="text-red-700 cursor-pointer hover:underline"
                        >
                          Sign Up
                        </span>{" "}
                        here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </LayoutCard>
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default Login;
