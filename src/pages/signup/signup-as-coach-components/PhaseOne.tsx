import { useState } from "react";
import { Formik } from "formik";
import Text from "../../../components/Input/Text";
import Select from "../../../components/Input/Select";
import Button from "../../../components/Buttons/Button";
import { signUpAsCoachStepOne } from "../../../utils/helpers/validations/signup";
import "../styles.scss";

const selectOption: string[] = [
  "Nigeria",
  "Ghana",
  "Tunisia",
  "Mali",
  "Ivory Coast",
  "South Africa",
  "Algeria",
  "Togo",
  "Benue",
  "Kenya",
  "Sudan",
];

const selectOption2: string[] = ["English", "Spanish", "German", "Italian"];

interface PhaseOneProps {
  firstname: string;
  dob: string;
  nationality: string;
  surname: string;
  videoLink: string;
  language: string;
}

const PhaseOne = ({
  handleNextStep,
  handleSetCoachData,
}: {
  handleNextStep: () => void;
  handleSetCoachData: (event: any) => void;
}): JSX.Element => {
  const [stageOneProps] = useState({
    firstname: "",
    dob: "1997-01-01",
    nationality: "",
    surname: "",
    videoLink: "",
    language: "",
  });

  const handleSubmitDataOne = (values: PhaseOneProps) => {
    handleNextStep();
    handleSetCoachData(values);
  };

  return (
    <div>
      <Formik
        validationSchema={signUpAsCoachStepOne}
        validateOnChange
        validateOnBlur
        initialValues={stageOneProps}
        onSubmit={handleSubmitDataOne}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <div className="mt-16">
            <form onSubmit={handleSubmit}>
              <div className="flex-layout">
                <div className="equal-sides">
                  <div className="w-full">
                    <p className="reg-label mb-2">First Name</p>
                    <Text
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.firstname &&
                        touched.firstname &&
                        errors.firstname}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Date of Birth</p>
                    <Text
                      type="date"
                      placeholder="Date of birth"
                      name="dob"
                      value={values.dob}
                      onChange={handleChange}
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.dob && touched.dob && errors.dob}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Nationality</p>
                    <Select
                      defaultList="Nationality"
                      name="nationality"
                      value={values.nationality}
                      onChange={handleChange}
                      options={selectOption}
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.nationality &&
                        touched.nationality &&
                        errors.nationality}
                    </p>
                  </div>
                </div>
                <div className="px-3"></div>
                <div className="equal-sides">
                  <div className="w-full">
                    <p className="reg-label mb-2">Surname</p>
                    <Text
                      type="text"
                      placeholder="Surname"
                      name="surname"
                      value={values.surname}
                      onChange={handleChange}
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.surname && touched.surname && errors.surname}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Add Video Link</p>
                    <Text
                      type="text"
                      placeholder="Video Link"
                      name="videoLink"
                      value={values.videoLink}
                      onChange={handleChange}
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.videoLink &&
                        touched.videoLink &&
                        errors.videoLink}
                    </p>
                  </div>
                  <div className="w-full mt-[35px]">
                    <p className="reg-label mb-2">Language</p>
                    <Select
                      defaultList="Language"
                      name="language"
                      value={values.language}
                      onChange={handleChange}
                      options={selectOption2}
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.language && touched.language && errors.language}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Enter your information"
                  className="input w-full mt-10 txt-area px-5 py-5"
                />
              </div>
              <div className="flex justify-center py-14">
                <Button label="Continue" customedClasses="py-5 px-20" />
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PhaseOne;
