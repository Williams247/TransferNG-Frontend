import { useState } from "react";
import { Formik } from "formik";
import { signUpAsCoachStepThree } from "../../../utils/helpers/validations/signup";
import Text from "../../../components/Input/Text";
import Button from "../../../components/Buttons/Button";

interface PhaseThreeProps {
  currentCity: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const PhaseThree = ({
  handleNextStep,
  coachData,
  handleSetCoachData,
}: {
  handleNextStep: () => void;
  coachData: any;
  handleSetCoachData: (event: any) => void;
}): JSX.Element => {
  const [phaseThreeData] = useState({
    currentCity: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmitDataThree = (values: PhaseThreeProps) => {
    handleNextStep();
    handleSetCoachData({
      ...coachData,
      currentCity: values.currentCity,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
    console.log(coachData);
  };
  return (
    <div>
      <Formik
        validationSchema={signUpAsCoachStepThree}
        validateOnChange
        validateOnBlur
        initialValues={phaseThreeData}
        onSubmit={handleSubmitDataThree}
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
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-5">
              <p className="reg-label mb-2">Current City</p>
              <Text
                type="text"
                name="currentCity"
                placeholder="Current City"
                value={values.currentCity}
                onChange={handleChange}
              />
              <p className="text-[red] mt-3 text-sm">
                {errors.currentCity &&
                  touched.currentCity &&
                  errors.currentCity}
              </p>
            </div>
            <div className="w-full mt-8">
              <p className="reg-label mb-2">Phone Number</p>
              <Text
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <p className="text-[red] mt-3 text-sm">
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </p>
            </div>
            <div className="w-full mt-8">
              <p className="reg-label mb-2">Email Address</p>
              <Text
                name="email"
                placeholder="Email Address"
                value={values.email}
                type="email"
                onChange={handleChange}
              />
              <p className="text-[red] mt-3 text-sm">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div className="w-full mt-8">
              <p className="reg-label mb-2">Password</p>
              <Text
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <p className="text-[red] mt-3 text-sm">
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <div className="w-full mt-8">
              <p className="reg-label mb-2">Confirm Password</p>
              <Text
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <p className="text-[red] mt-3 text-sm">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </p>
            </div>

            <div className="flex justify-center py-14">
              <Button label="Continue" customedClasses="py-5 px-20" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PhaseThree;
