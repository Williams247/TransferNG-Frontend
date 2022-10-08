import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Space from "../components/Space";

import "./styles.scss";

const General = ({ children }: any): JSX.Element => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="general-layout">
      <Navigation />
      <div className="pb-16">
        <Space>
          <div className="pt-36">{children}</div>
        </Space>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default General;
