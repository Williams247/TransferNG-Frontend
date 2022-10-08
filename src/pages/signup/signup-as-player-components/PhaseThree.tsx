import Text from "../../../components/Input/Text";
import Button from "../../../components/Buttons/Button";
import Select from "../../../components/Input/Select";

const clubs: Array<string> = [
  "Barcelona",
  "Real Madrid",
  "Manchester City",
  "Manchester United",
  "Chelsea",
  "Arsenal",
  "Liverpool",
  "Bayern Munich",
];

const PhaseThree = ({ handleNextStep }: any): JSX.Element => {
  return (
    <div>
      <form onSubmit={handleNextStep}>
        <div className="w-full mt-5">
          <p className="reg-label mb-2">Previous/Current Club</p>
          <Select
            value=""
            onChange={() => {}}
            defaultList="Previous/Current Club"
            options={clubs}
          />
        </div>
        <div className="flex">
          <div className="equal-sides mt-6">
            <div>
              <div className="mt-1">
                <p className="reg-label mb-2">Date of Birth</p>
                <Text placeholder="" type="text" value="" onChange={() => {}} />
              </div>
            </div>
          </div>
          <div className="px-2"></div>
          <div className="equal-sides mt-6">
            <div>
              <div className="mt-1">
                <p className="reg-label mb-2">Date of Birth</p>
                <Text placeholder="" type="text" value="" onChange={() => {}} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-14">
          <Button label="Complete Registration" customedClasses="py-5 px-20" />
        </div>
      </form>
    </div>
  );
};

export default PhaseThree;
