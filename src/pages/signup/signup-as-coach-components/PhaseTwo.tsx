import { useState } from "react";
import { Formik } from "formik";
import { signUpAsCoachStepTwo } from "../../../utils/helpers/validations/signup";
import Text from "../../../components/Input/Text";
import Button from "../../../components/Buttons/Button";

interface PhaseTwoProps {
  formerTeam: string;
  currentTeam: string;
}

const PhaseTwo = ({
  handleNextStep,
  handleSetCoachData,
  coachData,
}: {
  handleNextStep: () => void;
  handleSetCoachData: (event: any) => void;
  coachData: any;
}): JSX.Element => {
  const [phaseTwoData] = useState({ formerTeam: "", currentTeam: "" });
  const handleSubmitDataTwo = (values: PhaseTwoProps) => {
    handleSetCoachData({
      ...coachData,
      formerTeam: values.formerTeam,
      currentTeam: values.currentTeam,
    });
    handleNextStep();
  };

  return (
    <div>
      <Formik
        validationSchema={signUpAsCoachStepTwo}
        validateOnChange
        validateOnBlur
        initialValues={phaseTwoData}
        onSubmit={handleSubmitDataTwo}
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
              <p className="reg-label mb-2">Former Teams</p>
              <Text
                type="text"
                name="formerTeam"
                placeholder="former Teams"
                value={values.formerTeam}
                onChange={handleChange}
              />
              <p className="text-[red] mt-3 text-sm">
                {errors.formerTeam && touched.formerTeam && errors.formerTeam}
              </p>
            </div>
            <div className="w-full mt-8">
              <p className="reg-label mb-2">Current Teams</p>
              <Text
                type="text"
                name="currentTeam"
                placeholder="Current Teams"
                value={values.currentTeam}
                onChange={handleChange}
              />
              <p className="text-[red] mt-3 text-sm">
                {errors.currentTeam &&
                  touched.currentTeam &&
                  errors.currentTeam}
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

export default PhaseTwo;
