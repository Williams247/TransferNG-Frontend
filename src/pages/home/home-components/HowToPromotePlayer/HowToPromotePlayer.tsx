import Steps from "../../../../utils/constants/steps-to-promote-player";
import Space from "../../../../components/Space";
import "./styles.scss";

const HowToPromotePlayer = (): JSX.Element => {
  return (
    <div id="player-focus-container" className="py-10">
      <Space>
        <div className="flex-layout mt-24">
          <div className="equal-sides">
            {Steps.map((data, index) => {
              return (
                <div key={index}>
                  <div className="flex">
                    <div className="hidden sm:hidden md:inline lg:inline xl:inline">
                      <p className="plus-jakarta blue-text-color numbering">
                        0{index + 1}
                      </p>
                    </div>
                    <div id="space-in-between">
                      <p className="plus-jakarta steps pb-10 sm:pb-10 md:pb-10 lg:pb-0 xl:pb-0">
                        {data}
                      </p>
                    </div>
                  </div>
                  <div className={index + 1 === Steps.length ? "hidden" : ""}>
                    <div className="dashed-line ml-7 hidden sm:hidden md:block lg:block xl:block"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="equal-sides">
            <div id="side-2-space">
              <p
                id="how-to"
                className="plus-jakarta text-4xl font-bold red-text-color"
              >
                How to
              </p>
              <p
                id="promote-a-player"
                className={`
                  spantaran blue-text-color mt-7 text-[60px]
                  sm:text-[60px] md:text-[60px]
                  lg:text-[120.328px] xl:text-[120.328px]
                  leading-[100.5%] font-[400]
                `}
              >
                Promote a Player
              </p>
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default HowToPromotePlayer;
