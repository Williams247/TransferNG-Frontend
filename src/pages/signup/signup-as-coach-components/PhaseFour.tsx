import { useState } from "react";
import { FormSubmit } from "../../../utils/interface";
import Uploader from "../../../components/Input/Uploader";
import Button from "../../../components/Buttons/Button";
import "../styles.scss";

const PhaseFour = ({
  handleSubmitCoachData,
  loading,
}: {
  handleSubmitCoachData: (val: FormSubmit) => void;
  loading: boolean;
}): JSX.Element => {
  const [phaseFourData, setPhaseFourData] = useState({
    licenses: {
      url: "",
      publicId: "",
    },
    diploma: {
      url: "",
      publicId: "",
    },
    otherTraining: {
      url: "",
      publicId: "",
    },
  });

  return (
    <div>
      <p className="reg-label mb-2">Licenses/Certificates (Image)</p>
      <div className="mt-1">
        <Uploader
          accept="image/jpeg"
          urlCallBack={(url, publicId) =>
            setPhaseFourData({
              ...phaseFourData,
              licenses: { url: url, publicId: publicId },
            })
          }
        />
      </div>
      <p className="reg-label mb-2 mt-8">Diploma Certificate (Image)</p>
      <div className="mt-1">
        <Uploader
          accept="image/jpeg"
          urlCallBack={(url, publicId) =>
            setPhaseFourData({
              ...phaseFourData,
              diploma: { url: url, publicId: publicId },
            })
          }
        />
      </div>
      <p className="reg-label mb-2 mt-8">
        Other Trainings & Certifications (Image)
      </p>
      <div className="mt-1">
        <Uploader
          accept="image/jpeg"
          urlCallBack={(url, publicId) =>
            setPhaseFourData({
              ...phaseFourData,
              otherTraining: { url: url, publicId: publicId },
            })
          }
        />
      </div>
      <p className="reg-label mb-2 mt-8">Key Achievements</p>
      <textarea className="input w-full txt-area px-5 py-5" />
      <div className="flex justify-center py-10">
        <Button
          label="Complete Registration"
          customedClasses="py-5 px-20"
          loading={loading}
          onClick={() => handleSubmitCoachData(phaseFourData)}
        />
      </div>
    </div>
  );
};

export default PhaseFour;
