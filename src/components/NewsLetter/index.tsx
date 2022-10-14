import Button from "../Buttons/Button";
import "./styles.scss";

const NewsLetter = ({ label }: { label: string }): JSX.Element => {
  return (
    <div>
      <form className="block sm:block md:block lg:hidden xl:hidden">
        <div className="flex justify-center">
          <div className="news-letter-container">
            <div className="flex">
              <div className="input-container px-5 sm:px-5 md:px-5 lg:px-20 xl:px-20 py-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <button className="hidden sm:hidden md:hidden lg:inline xl:inline">
                {label}
              </button>
            </div>
          </div>
        </div>
        <Button label="Subscribe" customedClasses="w-full mt-5" />
      </form>

      <div className="hidden sm:hidden md:hidden lg:flex justify-center">
        <div className="news-letter-container">
          <form>
            <div className="flex">
              <div className="input-container px-5 sm:px-5 md:px-5 lg:px-20 xl:px-20 py-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <button>{label}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
