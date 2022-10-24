import { useState } from "react";
import { Formik } from "formik";
import { signUpAsPlayerStepThree } from "../../../utils/helpers/validations/signup/player";
import Text from "../../../components/Input/Text";
import Button from "../../../components/Buttons/Button";
import Select from "../../../components/Input/Select";

const clubs: string[] = [
  "Barcelona",
  "Real Madrid",
  "Manchester City",
  "Manchester United",
  "Chelsea",
  "Arsenal",
  "Liverpool",
  "Bayern Munich",
];

interface LastDataProps {
  previousCurrentClub: string;
  clubJoined: string;
  contractExpires: string;
  password: string;
  confirmPassword: string;
}

const PhaseThree = ({ data, handleSubmitPlayerData }: any): JSX.Element => {
  const [phaseThreeData] = useState({
    previousCurrentClub: "",
    clubJoined: "",
    contractExpires: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmitDataThree = (values: LastDataProps) => {
    handleSubmitPlayerData({
      ...data,
      previousCurrentClub: values.previousCurrentClub,
      clubJoined: values.clubJoined,
      contractExpires: values.contractExpires,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
  };
  return (
    <div>
      <Formik
        validationSchema={signUpAsPlayerStepThree}
        validateOnChange
        validateOnBlur
        initialValues={phaseThreeData}
        onSubmit={handleSubmitDataThree}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="w-full mt-5">
                <p className="reg-label mb-2">Previous/Current Club</p>
                <Select
                  value={values.previousCurrentClub}
                  onChange={handleChange}
                  defaultList="Previous/Current Club"
                  options={clubs}
                  name="previousCurrentClub"
                />
                <p className="text-[red] mt-3 text-sm">
                  {errors.previousCurrentClub &&
                    touched.previousCurrentClub &&
                    errors.previousCurrentClub}
                </p>
              </div>
              <div className="flex">
                <div className="equal-sides mt-6">
                  <div>
                    <div className="mt-1">
                      <p className="reg-label mb-2">Club joined</p>
                      <Text
                        placeholder="Club joined"
                        type="text"
                        value={values.clubJoined}
                        onChange={handleChange}
                        name="clubJoined"
                      />
                      <p className="text-[red] mt-3 text-sm">
                        {errors.clubJoined &&
                          touched.clubJoined &&
                          errors.clubJoined}
                      </p>
                    </div>
                    <div className="mt-8">
                      <p className="reg-label mb-2">Password</p>
                      <Text
                        placeholder="Password"
                        type="password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                      />
                      <p className="text-[red] mt-3 text-sm">
                        {errors.password && touched.password && errors.password}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-2"></div>
                <div className="equal-sides mt-6">
                  <div>
                    <div className="mt-1">
                      <p className="reg-label mb-2">Contract Expires</p>
                      <Text
                        placeholder="Contract Expires"
                        type="text"
                        name="contractExpires"
                        value={values.contractExpires}
                        onChange={handleChange}
                      />
                      <p className="text-[red] mt-3 text-sm">
                        {errors.contractExpires &&
                          touched.contractExpires &&
                          errors.contractExpires}
                      </p>
                    </div>
                    <div className="mt-8">
                      <p className="reg-label mb-2">Confirm Password</p>
                      <Text
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                      />
                      <p className="text-[red] mt-3 text-sm">
                        {errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-14">
                <Button
                  label="Complete Registration"
                  customedClasses="py-5 px-20 bg-[#e30319]"
                  type="submit"
                />
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PhaseThree;
