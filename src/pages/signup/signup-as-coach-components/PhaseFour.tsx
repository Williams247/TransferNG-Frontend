import { useState, useRef } from "react";
import Uploader from "../../../components/Input/Uploader";
import Button from "../../../components/Buttons/Button";
import "../styles.scss";

const PhaseFour = ({
  handleSetFileOne,
  handleSetFileTwo,
  handleSetFileThree,
  handleSubmitCoachData,
}: {
  handleSetFileOne: (event: void) => void;
  handleSetFileTwo: (event: void) => void;
  handleSetFileThree: (event: void) => void;
  handleSubmitCoachData: (event: void) => void;
}): JSX.Element => {
  const fileOneRef = useRef<any>(null);
  const fileTwoRef = useRef<any>(null);
  const fileThreeRef = useRef<any>(null);

  const handleGetFileOne = (event: any) => {
    const file = event.target.files[0];
    handleSetFileOne(file);
    fileOneRef.current.src = URL.createObjectURL(file);
  };
  const handleGetFileTwo = (event: any) => {
    const file = event.target.files[0];
    handleSetFileTwo(file);
    fileTwoRef.current.src = URL.createObjectURL(file);
  };
  const handleGetFileThree = (event: any) => {
    const file = event.target.files[0];
    handleSetFileThree(file);
    fileThreeRef.current.src = URL.createObjectURL(file);
  };

  return (
    <div>
      <p className="reg-label mb-2">Licenses/Certificates (Image)</p>
      <div className="mt-1">
        <img ref={fileOneRef} className="w-full mb-5" />
        <Uploader
          type="file"
          placeholder="Upload file"
          accept="image/jpeg"
          onChange={handleGetFileOne}
        />
      </div>
      <p className="reg-label mb-2 mt-8">Diploma Certificate (Image)</p>
      <div className="mt-1">
        <img ref={fileTwoRef} className="w-full mb-5" />
        <Uploader
          type="file"
          placeholder="Upload file"
          accept="image/jpeg"
          onChange={handleGetFileTwo}
        />
      </div>
      <p className="reg-label mb-2 mt-8">
        Other Trainings & Certifications (Image)
      </p>
      <div className="mt-1">
        <img ref={fileThreeRef} className="w-full mb-5" />
        <Uploader
          type="file"
          placeholder="Upload file"
          accept="image/jpeg"
          onChange={handleGetFileThree}
        />
      </div>

      <p className="reg-label mb-2 mt-8">
        Other Trainings & Certifications (Image)
      </p>
      <textarea className="input w-full txt-area px-5 py-5" />
      <div className="flex justify-center py-10">
        <Button
          onClick={handleSubmitCoachData}
          label="Complete Registration"
          customedClasses="py-5 px-20"
          loading={false}
        />
      </div>
    </div>
  );
};

export default PhaseFour;
