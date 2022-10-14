import Space from "../../../../components/Space";
import Profiling from "./icons/Profiling";
import Click from "./icons/Click";
import Coaches from "./icons/Coaches";
import Access from "./icons/Access";
import Network from "./icons/Network";
import Laws from "./icons/Laws";

import "./styles.scss";

const TFHub = (): JSX.Element => {
  return (
    <div>
      <Space>
        <div>
          <div className="flex justify-center">
            <p id="TFHub" className="spantaran mt-48">
              Why you need
              <br />
              Transferhub
            </p>
          </div>
          <div className="flex justify-center mt-20">
            <div className="flex ml-10">
              <button className="func-btn py-3 px-5 func-btn-active">
                As a Footballer
              </button>
              <div className="px-2"></div>
              <button className="func-btn py-3 px-5">As a Coach</button>
            </div>
          </div>
          <div
            className={`
            flex flex-col sm:flex-col
            md:flex-col lg:flex-row
            xl:flex-row mt-10
          `}
          >
            <div
              className={`
                w-full sm:w-full md:w-full
                lg:w-1/2 xl:w-1/2 sm:px-0 md:px-0
                lg:px-10
            `}
            >
              <div
                className={`
                sample-card flex
                justify-center w-full
                sm:w-full md:w-full
                lg:[width: 300px] xl:[width: 300px]
              `}
              >
                <div>
                  <img
                    id="kick"
                    className="mt-16"
                    src={require("../../../../static/images/kick.png")}
                    alt="As a footballer"
                  />
                  <div>
                    <p className="sample-card-text text-center mt-5">
                      As a Footballer
                    </p>
                  </div>
                </div>
              </div>
              <div className="sample-card flex justify-center mt-10">
                <div>
                  <img
                    id="coach"
                    className="mt-16"
                    src={require("../../../../static/images/coach.png")}
                    alt="As a coach"
                  />
                  <div>
                    <p className="sample-card-text text-center mt-5">
                      As a Coach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full sm:w-full
            md:w-full lg:w-1/2 xl:w-1/2 px-0
            sm:px-0 md:px-0 lg:px-10`}
            >
              <div
                className={`
                w-[width: 630px] ring-1 ring-[#0757a0]
                rounded-[30px] mt-10 sm:mt-10
                md:mt-10 lg:mt-0 xl:mt-0
              `}
              >
                <div className="px-8 py-10">
                  <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                    <div>
                      <Profiling />
                    </div>
                    <div>
                      <p
                        className={`plus-jakarta tfhub-text
                      px-1 sm:px-1 md:px-1
                      lg:px-8 xl:px-8 pt-4 sm:pt-4
                      md:pt-4 lg:mt-0 xl:mt-0`}
                      >
                        For proper profiling and record keeping{" "}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col
                    sm:flex-col md:flex-col
                    lg:flex-row xl:flex-row mt-10
                    pt-4 sm:pt-4 md:pt-4
                    lg:mt-0 xl:mt-0`}
                  >
                    <div>
                      <Click />
                    </div>
                    <div>
                      <p
                        className={`plus-jakarta tfhub-text
                      px-1 sm:px-1 md:px-1
                      lg:px-8 xl:px-8 pt-4 sm:pt-4
                      md:pt-4 lg:mt-0 xl:mt-0`}
                      >
                        To have all your footballing data in one click{" "}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-col
                    md:flex-col lg:flex-row xl:flex-row
                    mt-10 pt-4 sm:pt-4
                    md:pt-4 lg:mt-0 xl:mt-0`}
                  >
                    <div>
                      <Coaches />
                    </div>
                    <div>
                      <p
                        className={`plus-jakarta tfhub-text
                      px-1 sm:px-1 md:px-1 lg:px-8
                      xl:px-8 pt-4 sm:pt-4 md:pt-4
                      lg:mt-0 xl:mt-0`}
                      >
                        Easily accessible and verifiable to coaches, scouts and
                        football club
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-col
                  md:flex-col lg:flex-row
                  xl:flex-row mt-10 pt-4`}
                  >
                    <div>
                      <Access />
                    </div>
                    <div>
                      <p
                        className={`plus-jakarta tfhub-text
                      px-1 sm:px-1 md:px-1 lg:px-8
                      xl:px-8 pt-4 sm:pt-4 md:pt-4`}
                      >
                        To track and monitor personal progress with data
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-col
                  md:flex-col lg:flex-row
                  xl:flex-row mt-10 pt-4`}
                  >
                    <div>
                      <Network />
                    </div>
                    <div>
                      <p
                        className={`plus-jakarta tfhub-text
                      px-1 sm:px-1 md:px-1 lg:px-8
                      xl:px-8 pt-4 sm:pt-4 md:pt-4`}
                      >
                        {" "}
                        To get connected to the next club in your career
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-col
                    md:flex-col lg:flex-row
                    xl:flex-row mt-10`}
                  >
                    <div>
                      <Laws />
                    </div>
                    <div>
                      <p
                        className={`plus-jakarta tfhub-text
                      px-1 sm:px-1 md:px-1 lg:px-8
                      xl:px-8 pt-4 sm:pt-4 md:pt-4`}
                      >
                        {" "}
                        To get agents, lawyers/scouts to represent you in the
                        long run.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default TFHub;
