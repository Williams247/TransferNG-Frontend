import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerFirstPhase } from "../../utils/constants/types";
import AuthLayout from "../../layouts/Auth";
import LayoutCard from "../../components/Card/LayoutCard";
import BackButton from "../../components/Buttons/BackButton";
import PhaseOne from "./signup-as-player-components/PhaseOne";
import PhaseTwo from "./signup-as-player-components/PhaseTwo";
import PhaseThree from "./signup-as-player-components/PhaseThree";
import axios from "../../utils/axios";
import Step from "../../components/step";
import "./styles.scss";

const Player = (): JSX.Element => {
  const [phase, setPhase] = useState<number>(1);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [data, setData] = useState({
    firstname: "",
    surname: "",
    dob: "",
    nationality: "",
    videoLink: "",
    languages: "",
    weight: "",
    height: "",
    bestPosition: "",
    foot: "",
    currentCity: "",
    email: "",
    phoneNumber: "",
    linkedinProfileLink: "",
    instagramProfileLink: "",
    twitterProfileLink: "",
  });

  const navigate = useNavigate();

  const handleNextStep = () => {
    setPhase(phase + 1);
    if (phase === 3 || phase > 3) {
      setPhase(3);
      return;
    }
  };

  const handlePrevStep = (): void => {
    if (phase === 1) return navigate(-1);
    setPhase(phase - 1);
    setIsDone(false);
  };

  const handleSetData = (res: any) => {
    setData(res);
    console.log(data);
  };

  const handleSubmitPlayerData = async (lastData: any) => {
    const {
      firstname,
      surname,
      dob,
      nationality,
      languages,
      weight,
      height,
      bestPosition,
      foot,
      currentCity,
      email,
      password,
      confirmPassword,
      phoneNumber,
      linkedinProfileLink,
      instagramProfileLink,
      twitterProfileLink,
    } = lastData;
    try {
      const res = await axios.post("/auth/footballer/register", {
        firstname,
        surname,
        dob,
        nationality,
        languages,
        weight,
        height,
        bestPosition,
        foot,
        currentCity,
        email,
        password,
        confirmPassword,
        phoneNumber,
        linkedinProfileLink,
        instagramProfileLink,
        twitterProfileLink,
      });
      console.log("Footballer res");
      console.log(res);
    } catch (error) {}
  };

  return (
    <div>
      <AuthLayout>
        <div>
          <LayoutCard>
            <div>
              <BackButton onClick={handlePrevStep} />
              <div className="mt-1">
                <div className="px-10">
                  <p className="signup">Sign Up as a player</p>
                  <p className="text-center text-xl mt-4">
                    Sign Up as a player, connect with great Talents
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
                          label: "Contact Information",
                        },
                        {
                          active: phase === 3 ? true : false,
                          done: isDone,
                          value: 3,
                          label: "Personal Information",
                        },
                      ]}
                    />
                  </div>
                  <div className="mt-10">
                    {phase === 1 && (
                      <PhaseOne
                        handleNextStep={handleNextStep}
                        handleSetData={handleSetData}
                      />
                    )}
                    {phase === 2 && (
                      <PhaseTwo
                        handleNextStep={handleNextStep}
                        handleSetData={handleSetData}
                        data={data}
                      />
                    )}
                    {phase === 3 && (
                      <PhaseThree
                        handleNextStep={handleNextStep}
                        data={data}
                        setData={setData}
                        handleSetData={handleSetData}
                        handleSubmitPlayerData={handleSubmitPlayerData}
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

export default Player;
