import GeneralLayout from "../../layouts/General";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Buttons/Button";
import TransparentCard from "../../components/Card/TransparentCard";

const vidoes = [
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
  {
    title: "Video Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
  },
];

const Coach = (): JSX.Element => {
  return (
    <div>
      <GeneralLayout>
        <div>
          <div className="flex justify-between">
            <div className="w-[65%]">
              <SearchBar />
            </div>
            <div>
              <Button label="Send Message" />
            </div>
          </div>
          <div className="mt-14">
            <div className="flex justify-between">
              <div className="w-[33%]">
                <img
                  className="w-full rounded-2xl"
                  src={require("../../static/images/coach.jpg")}
                />
              </div>
              <div className="w-[63%]">
                <TransparentCard>
                  <div>
                    <p className="spantaran text-[30px] leading-[169.5%] font-[400] text-white">
                      Biography
                    </p>
                    <p className="py-1 plus-jakarta text-white text-[17px] leading-[180%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbis pellentesque lacinia sit convallis enim. Integer
                      nisl, lorem vel purus Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Morbis pellentesque lacinia
                      sit convallis enim. Integer nisl, lorem vel purus Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Morbis
                      pellentesque lacinia sit convallis enim. Integer nisl,
                      lorem vel purus Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Morbis pellentesque lacinia sit convallis
                      enim. Integer nisl, lorem vel purus
                    </p>
                  </div>
                </TransparentCard>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <div className="w-[33%]">
                <p className="spantaran text-[30px] leading-[169.5%] font-[400] text-white mt-4">
                  Pep Guardiola
                </p>
                <div className="mt-5">
                  <div className="flex justify-between">
                    <div>
                      <div>
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          Current Club:
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          Manchester City
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          DOB/Age:
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          Feb. 5, 1971 (51)
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          Joined Club:
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          July 1 2016
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          Debut March:
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          Sunderland
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          Country:
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          Spain
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          Height:
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          1.87m
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          Weight:
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          81kg
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="plus-jakarta text-[#E4F0FB] text-[13px] leading-[180%]">
                          Premier League Seasons::
                        </p>
                        <p className="plus-jakarta text-[#E4F0FB] text-[19px] font-[600] leading-[180%]">
                          6
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[63%] pt-5">
                <div className="flex justify-between">
                  <div className="w-[48%] h-[376px]">
                    <TransparentCard className="h-[376px]">
                      <div>
                        <p className="spantaran text-[30px] leading-[169.5%] font-[400] text-white">
                          Awards
                        </p>
                        <div className="mt-3">
                          <div className="plus-jakarta text-white text-[17px] leading-[180%]">
                            <p>Premier League Champions 3</p>
                            <p>2017/18</p>
                            <p>2018/19</p>
                            <p>2020/21</p>

                            <p className="mt-4">Manager of the season 3</p>
                            <p>2017/18</p>
                            <p>2018/19</p>
                            <p>2020/21</p>
                          </div>
                        </div>
                      </div>
                    </TransparentCard>
                  </div>
                  <div className="w-[48%]">
                    <TransparentCard className="h-[376px]">
                      <div>
                        <p className="spantaran text-[30px] leading-[169.5%] font-[400] text-white">
                          Season Stats
                        </p>
                        <div className="mt-3">
                          <div className="plus-jakarta text-white text-[17px] leading-[180%]">
                            <p>Matches: 216</p>
                            <p>Wins: 160</p>
                            <p>Draws: 30</p>
                            <p>Losses: 30</p>
                            <p>Goals for: 529</p>
                            <p>Goals Against: 173</p>
                          </div>
                        </div>
                      </div>
                    </TransparentCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <p className="spantaran text-[30px] leading-[169.5%] font-[400] text-white">
              Videos
            </p>
            <div className="mt-8">
              <div className="flex w-full flex-row flex-wrap justify-between">
                {vidoes.map((i, index) => {
                  return (
                    <div className="w-[31.5%] mt-7">
                      <img
                        src={require("../../static/images/coach.jpg")}
                        className="w-full rounded-2xl"
                      />
                      <div className="mt-5">
                        <p className="plus-jakarta text-[20px] leading-[169.5%] font-[400] text-white">
                          Video Titles
                        </p>
                        <p className="plus-jakarta text-[15px] leading-[169.5%] font-[400] text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbis pellentesque lacinia sit
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </GeneralLayout>
    </div>
  );
};

export default Coach;
