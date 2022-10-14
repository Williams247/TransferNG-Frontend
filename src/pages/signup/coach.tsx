import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/Auth";
import LayoutCard from "../../components/Card/LayoutCard";
import BackButton from "../../components/Buttons/BackButton";
import PhaseOne from "./signup-as-coach-components/PhaseOne";
import PhaseTwo from "./signup-as-coach-components/PhaseTwo";
import PhaseThree from "./signup-as-coach-components/PhaseThree";
import PhaseFour from "./signup-as-coach-components/PhaseFour";
import Step from "../../components/step";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import "./styles.scss";

const Coach = () => {
  const [phase, setPhase] = useState<number>(1);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [fileOne, setFileOne] = useState<any>(null);
  const [fileTwo, setFileTwo] = useState<any>(null);
  const [fileThree, setFileThree] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null);

  const [coachData, setCoachData] = useState({
    firstname: "",
    surname: "",
    dob: "",
    nationality: "",
    languages: "",
    formerTeams: "",
    currentTeam: "",
    currentCity: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleNextStep = (): void => {
    setPhase(phase + 1);
  };

  const handlePrevStep = (): void => {
    if (phase === 1) return navigate(-1);
    setPhase(phase - 1);
    setIsDone(false);
  };

  const handleSetFileOne = (file: any) => setFileOne(file);
  const handleSetFileTwo = (file: any) => setFileTwo(file);
  const handleSetFileThree = (file: any) => setFileThree(file);
  const handleSetCoachData = (res: any) => setCoachData(res);

  const handleSubmitCoachData = async () => {
    setLoading(true);
    try {
      const formData: FormData = new FormData();
      formData.append("firstname", coachData.firstname);
      formData.append("surname", coachData.surname);
      formData.append("dob", coachData.dob);
      formData.append("nationality", coachData.nationality);
      formData.append("languages", coachData.languages);
      formData.append("formerTeams", coachData.formerTeams);
      formData.append("currentTeam", coachData.currentTeam);
      formData.append("currentCity", coachData.currentCity);
      formData.append("phoneNumber", coachData.phoneNumber);
      formData.append("email", coachData.email);
      formData.append("password", coachData.password);
      formData.append("confirmPassword", coachData.confirmPassword);
      formData.append("image", fileOne);
      formData.append("image", fileTwo);
      formData.append("image", fileThree);

      const res: any = await axios({
        method: "post",
        url: "/auth/coach/register",
        data: formData,
      });

      setLoading(false);

      toast.success(res.data.message);
      setTimeout(() => {
        window.location.href = "/coach/login";
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <AuthLayout>
        <div>
          <LayoutCard>
            <div>
              <div className="pl-8 sm:pl-8 md:pl-8 lg:pl-0 xl:pl-0">
                <BackButton onClick={handlePrevStep} />
              </div>
              <div className="mt-1">
                <div className="px-10">
                  <p className="signup">Sign Up as a Coach</p>
                  <p className="text-center text-xl mt-4">
                    Sign Up as a Coach, connect with great Talents
                  </p>
                  <div className="mt-10 flex justify-center">
                    <Step
                      info={[
                        {
                          active: phase === 1 ? true : false,
                          done: phase > 1 ? true : false,
                          value: 1,
                          label: "Personal Data",
                        },
                        {
                          active: phase === 2 ? true : false,
                          done: phase > 2 ? true : false,
                          value: 2,
                          label: "Job History",
                        },
                        {
                          active: phase === 3 ? true : false,
                          done: phase > 3 ? true : false,
                          value: 3,
                          label: "Contact Information",
                        },
                        {
                          active: phase === 4 ? true : false,
                          done: isDone,
                          value: 4,
                          label: "Personal Information",
                        },
                      ]}
                    />
                  </div>
                  <div className="mt-10">
                    {phase === 1 && (
                      <PhaseOne
                        handleSetCoachData={handleSetCoachData}
                        handleNextStep={handleNextStep}
                      />
                    )}
                    {phase === 2 && (
                      <PhaseTwo
                        coachData={coachData}
                        handleSetCoachData={handleSetCoachData}
                        handleNextStep={handleNextStep}
                      />
                    )}
                    {phase === 3 && (
                      <PhaseThree
                        coachData={coachData}
                        handleSetCoachData={handleSetCoachData}
                        handleNextStep={handleNextStep}
                      />
                    )}
                    {phase === 4 && (
                      <PhaseFour
                        handleSetFileOne={handleSetFileOne}
                        handleSetFileTwo={handleSetFileTwo}
                        handleSetFileThree={handleSetFileThree}
                        handleSubmitCoachData={handleSubmitCoachData}
                        loading={loading}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </LayoutCard>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Coach;
