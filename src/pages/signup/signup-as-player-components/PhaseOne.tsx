import { useState } from "react";
import { Formik } from "formik";
import { signUpAsPlayerStepOne } from "../../../utils/helpers/validations/signup/player";
import { PlayerFirstPhase } from "../../../utils/constants/types";
import Text from "../../../components/Input/Text";
import Select from "../../../components/Input/Select";
import Button from "../../../components/Buttons/Button";
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
const selectOption3: string[] = ["5.5", "6", "7"];
const selectOption4: string[] = ["Defender", "Mild Fielder", "Striker"];
const selectOption5: string[] = ["20Kg", "30Kg", "50Kg", "80Kg", "100Kg"];

const PhaseOne = ({
  handleNextStep,
  handleSetData,
}: {
  handleNextStep: () => void;
  handleSetData: (event: PlayerFirstPhase) => void;
}): JSX.Element => {
  const [stageOneProps] = useState({
    firstname: "",
    surname: "",
    dob: "2005-01-01",
    videoLink: "",
    nationality: "",
    language: "",
    height: "",
    weight: "",
    bestPosition: "",
    foot: "",
  });

  const handleMoveToNextStage = (values: PlayerFirstPhase): void => {
    handleSetData(values);
    handleNextStep();
  };
  return (
    <div>
      <div className="mt-16">
        <Formik
          validationSchema={signUpAsPlayerStepOne}
          validateOnChange
          validateOnBlur
          initialValues={stageOneProps}
          onSubmit={handleMoveToNextStage}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex-layout">
                <div className="equal-sides">
                  <div className="w-full">
                    <p className="reg-label mb-2">First Name</p>
                    <Text
                      type="text"
                      placeholder="First name"
                      value={values.firstname}
                      onChange={handleChange}
                      name="firstname"
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
                      placeholder="Date of Birth"
                      value={values.dob}
                      onChange={handleChange}
                      name="dob"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.dob && touched.dob && errors.dob}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Nationality</p>
                    <Select
                      defaultList="Nationality"
                      options={selectOption}
                      value={values.nationality}
                      onChange={handleChange}
                      name="nationality"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.nationality &&
                        touched.nationality &&
                        errors.nationality}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Height (Inches)</p>
                    <Select
                      defaultList="Height"
                      value={values.height}
                      options={selectOption3}
                      onChange={handleChange}
                      name="height"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.height && touched.height && errors.height}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Best Position</p>
                    <Select
                      defaultList="Best Position"
                      options={selectOption4}
                      value={values.bestPosition}
                      onChange={handleChange}
                      name="bestPosition"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.bestPosition &&
                        touched.bestPosition &&
                        errors.bestPosition}
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
                      value={values.surname}
                      onChange={handleChange}
                      name="surname"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.surname && touched.surname && errors.surname}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Add Video Link</p>
                    <Text
                      type="text"
                      placeholder="Add Video link"
                      value={values.videoLink}
                      onChange={handleChange}
                      name="videoLink"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.videoLink &&
                        touched.videoLink &&
                        errors.videoLink}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Language</p>
                    <Select
                      defaultList="Language"
                      value={values.language}
                      options={selectOption2}
                      onChange={handleChange}
                      name="language"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.language && touched.language && errors.language}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Weight (Kg)</p>
                    <Select
                      defaultList="Weight"
                      value={values.weight}
                      options={selectOption5}
                      onChange={handleChange}
                      name="weight"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.weight && touched.weight && errors.weight}
                    </p>
                  </div>
                  <div className="w-full mt-8">
                    <p className="reg-label mb-2">Foot</p>
                    <Text
                      type="text"
                      placeholder="Foot"
                      value={values.foot}
                      onChange={handleChange}
                      name="foot"
                    />
                    <p className="text-[red] mt-3 text-sm">
                      {errors.foot && touched.foot && errors.foot}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  className="input w-full mt-10 txt-area px-5 py-5"
                  placeholder="Enter your Information"
                />
              </div>
              <div className="flex justify-center py-14">
                <Button
                  type="submit"
                  label="Continue"
                  customedClasses="py-5 px-20 bg-[#e30319]"
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PhaseOne;
