import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Button from "../components/Buttons/Button";
import Footer from "../components/Footer";
import SideBar from "../components/Navigation/SideBar";
import SignUpAsModal from "../components/Modal/SignUpAs";
import LoginAsModal from "../components/Modal/LoginAs";
import "./styles.scss";

const Home = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [openCloseRegisterAs, setOpenCloseRegisterAs] = useState(false);
  const [openCloseLoginAs, setOpenCloseLoginAs] = useState(false);
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);
  const handleOpenClose = () => setOpen(!open);
  const handleOpenCloseRegisterAs = () =>
    setOpenCloseRegisterAs(!openCloseRegisterAs);
  const handleOpenCloseLoginModal = () =>
    setOpenCloseLoginAs(!openCloseLoginAs);
  return (
    <div>
      <Navigation
        handleOpenSideMenu={handleOpenClose}
        handleOpenCloseRegisterAs={handleOpenCloseRegisterAs}
        handleOpenCloseLoginAs={handleOpenCloseLoginModal}
      />
      <div id="home-layout">
        <div id="home-layout-overlay" className="pt-7">
          <div>
            <div id="top-content-container">
              <div className="flex justify-center">
                <div className="mt-[250px] sm:mt-[250px] md:mt-[200px] lg:mt-0 xl:mt-0">
                  <p
                    id="welcome-text"
                    className="text-white text-3xl font-bold plus-jakarta"
                  >
                    Welcome to
                  </p>
                  <p
                    className={`
                    text-white text-[50px]
                    sm:text-[50px] md:text-[80px]
                    lg:text-9xl xl:text-9xl
                    text-center spantaran
                `}
                  >
                    TransferhubNG
                  </p>
                </div>
              </div>
              <p
                id="connecting"
                className="text-white text-center plus-jakarta px-12 sm:px-12 md:px-12 lg:px-0 xl:px-0"
              >
                Connecting players and coaches to clubs and Agencies
              </p>
              <div className="flex justify-center">
                <div>
                  <Button
                    label="Get discovered"
                    customedClasses="px-14 py-7 mt-10 text-xl"
                    onClick={handleOpenCloseRegisterAs}
                  />
                  <div className="flex justify-center mt-20">
                    <button id="down-btn" className="py-10 px-5">
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9 9L17 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="text-center text-white mt-5 plus-jakarta">
                      Click to Scroll down
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16">{children}</div>
      <div>
        <Footer />
      </div>
      <SideBar open={open} handleOpenSideMenu={handleOpenClose} />
      <SignUpAsModal
        isOpen={openCloseRegisterAs}
        handleOpenCloseRegisterAs={handleOpenCloseRegisterAs}
      />
      <LoginAsModal
        isOpen={openCloseLoginAs}
        handleOpenCloseLoginModal={handleOpenCloseLoginModal}
      />
    </div>
  );
};

export default Home;
