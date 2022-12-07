import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Space from "../components/Space";
import SideBar from "../components/Navigation/SideBar";
import SignUpAsModal from "../components/Modal/SignUpAs";
import LoginAsModal from "../components/Modal/LoginAs";

import "./styles.scss";

const General = ({ children }: { children: JSX.Element }): JSX.Element => {
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
    <div className="general-layout">
      <Navigation
        handleOpenSideMenu={handleOpenClose}
        handleOpenCloseRegisterAs={handleOpenCloseRegisterAs}
        handleOpenCloseLoginAs={handleOpenCloseLoginModal}
      />
      <div className="pb-16">
        <Space>
          <div className="pt-10 sm:pt-10 md:pt-10 lg:pt-36 xl:pt-36">
            {children}
          </div>
        </Space>
      </div>
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

export default General;
