import { useNavigate } from "react-router-dom";
import LayoutCard from "../Card/LayoutCard";
import CloseButton from "../Buttons/CloseButton";
import "./styles.scss";

interface Props {
  isOpen: boolean;
  handleOpenCloseLoginModal: () => void;
}

const LoginAs = ({ isOpen, handleOpenCloseLoginModal }: Props): JSX.Element => {
  const history = useNavigate();
  return (
    <div>
      {isOpen && (
        <div
          className={isOpen ? "modal-body scrolled pb-16" : "modal-body pb-16"}
        >
          <div className="modal-box">
            <LayoutCard>
              <div>
                <div className="px-5">
                  <div>
                    <div
                      onClick={handleOpenCloseLoginModal}
                      className="float-right"
                    >
                      <CloseButton />
                    </div>
                  </div>
                </div>
                <div className="mt-20">
                  <p id="get-started-text" className="text-center mt-3">
                    Login in either as a Footballer or Coach
                  </p>
                </div>
                <div className="mt-10 pb-20">
                  <div
                    className={`flex flex-col sm:flex-col
                    md:flex-col lg:flex-row
                    xl:flex-row justify-between`}
                  >
                    <div
                      className="w-full sm:w-full md:w-full lg:w-[48%] xl:w-[48%]"
                      onClick={() => history("/login/player")}
                    >
                      <div className="select-reg-type flex justify-center py-16 cursor-pointer">
                        <div>
                          <img
                            className="select-reg-type-img"
                            src={require("../../static/images/kick.png")}
                            alt="Login as footballer"
                          />
                          <p className="select-reg-type-text text-center mt-4">
                            Login as a<br />
                            Footballer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`
                        w-full sm:w-full md:w-full
                        lg:w-[48%] xl:w-[48%] mt-10 sm:mt-10
                        md:mt-10 lg:mt-0 xl:mt-0
                      `}
                      onClick={() => history("/login/coach")}
                    >
                      <div
                        className={`select-reg-type flex justify-center py-16 cursor-pointer`}
                      >
                        <div>
                          <img
                            className="select-reg-type-img"
                            src={require("../../static/images/coach.png")}
                            alt="Sign up as coach"
                          />
                          <p className="select-reg-type-text text-center mt-4">
                            Login as a<br />
                            coach
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LayoutCard>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginAs;
