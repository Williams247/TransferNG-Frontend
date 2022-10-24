import { useState } from "react";
import { Formik } from "formik";
import { signUpAsPlayerStepTwo } from "../../../utils/helpers/validations/signup/player";
import { PlayerSecondPhase } from "../../../utils/constants/constant";
import Text from "../../../components/Input/Text";
import Button from "../../../components/Buttons/Button";
import "../styles.scss";

const PhaseTwo = ({
  handleNextStep,
  data,
  handleSetData,
}: any): JSX.Element => {
  const [phaseTwoData] = useState({
    currentCity: "",
    phoneNumber: "",
    email: "",
    linkedinProfileLink: "",
    instagramProfileLink: "",
    twitterProfileLink: "",
  });
  const handleSubmitDataTwo = (values: PlayerSecondPhase) => {
    handleNextStep();
    handleSetData({
      ...data,
      currentCity: values.currentCity,
      phoneNumber: values.phoneNumber.toString(),
      email: values.email,
      linkedinProfileLink: values.linkedinProfileLink,
      instagramProfileLink: values.instagramProfileLink,
      twitterProfileLink: values.twitterProfileLink,
    });
  };
  return (
    <div>
      <Formik
        validationSchema={signUpAsPlayerStepTwo}
        validateOnChange
        validateOnBlur
        initialValues={phaseTwoData}
        onSubmit={handleSubmitDataTwo}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <div className="mt-16">
            <form onSubmit={handleSubmit}>
              <div className="flex-layout">
                <div className="equal-sides">
                  <div className="w-full">
                    <p className="reg-label mb-2">Current City</p>
                    <Text
                      type="text"
                      value={values.currentCity}
                      placeholder="Current City"
                      onChange={handleChange}
                      name="currentCity"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.currentCity &&
                        touched.currentCity &&
                        errors.currentCity}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Email Address</p>
                    <Text
                      type="email"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Instagram profile link</p>
                    <Text
                      type="text"
                      value={values.instagramProfileLink}
                      placeholder="Add your instagram link"
                      onChange={handleChange}
                      name="instagramProfileLink"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.instagramProfileLink &&
                        touched.instagramProfileLink &&
                        errors.instagramProfileLink}
                    </p>
                  </div>
                </div>
                <div className="px-3"></div>
                <div className="equal-sides">
                  <div className="w-full">
                    <p className="reg-label mb-2">Phone Number</p>
                    <Text
                      type="number"
                      value={values.phoneNumber}
                      placeholder="Enter your phone number"
                      onChange={handleChange}
                      name="phoneNumber"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Linkedin profile link</p>
                    <Text
                      type="text"
                      value={values.linkedinProfileLink}
                      placeholder="Enter your linkedin link"
                      onChange={handleChange}
                      name="linkedinProfileLink"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.linkedinProfileLink &&
                        touched.linkedinProfileLink &&
                        errors.linkedinProfileLink}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Twitter profile link</p>
                    <Text
                      type="text"
                      value={values.twitterProfileLink}
                      placeholder="Enter your twitter link"
                      onChange={handleChange}
                      name="twitterProfileLink"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.twitterProfileLink &&
                        touched.twitterProfileLink &&
                        errors.twitterProfileLink}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-14">
                <Button
                  type="submit"
                  label="Continue"
                  customedClasses="py-5 px-20 bg-[#e30319]"
                />
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PhaseTwo;
