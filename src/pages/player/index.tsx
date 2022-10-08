import { useState } from "react";
import General from "../../layouts/General";
import TextInputTrans from "../../components/Input/TextInputTrans";
import Button from "../../components/Buttons/Button";
import PlayerCoachInfo from "../../components/PlayerCoachInfo";
import TransparentCard from "../../components/Card/TransparentCard";
import PlayerCoachList from "../../components/PlayerCoachVideoList";
import "./styles.scss";

interface DataOneInterface {
  description: string;
  value: string;
}

interface VideoList {
  mediaURL: string;
  title: string;
  description: string;
}

interface DataTwoProps {
  description: string;
  value: string;
}

type seasonStats = string[];

const Player = (): JSX.Element => {
  const [dataOne] = useState<DataOneInterface[]>([
    {
      description: "Current Club",
      value: "Manchester United",
    },
    {
      description: "DOB/Age",
      value: "Feb 5, 1985(37)",
    },
    {
      description: "Position",
      value: "Centre-Forward",
    },
    {
      description: "Foot",
      value: "Left and Right",
    },
  ]);
  const [dataTwo] = useState<DataTwoProps[]>([
    {
      description: "Country",
      value: "Portugal",
    },
    {
      description: "Height",
      value: "1.87m",
    },
    {
      description: "Weight",
      value: "81 Kg",
    },
    {
      description: "Goals",
      value: "765 career goals",
    },
  ]);
  const [seasonStats] = useState<seasonStats>([
    "Appearance: 12(5)",
    "Goals/Assits:7/4",
    "Shots(per game):5.3",
    "Dribbles (per game): 6.8",
    "Pass Accuracy: 93%",
  ]);
  const [videoList] = useState<VideoList[]>([
    {
      mediaURL: "../../static/images/cr7-three.png",
      title: "Video Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
    },
    {
      mediaURL: "../../static/images/cr7-three.png",
      title: "Video Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
    },
    {
      mediaURL: "../../static/images/cr7-three.png",
      title: "Video Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
    },
    {
      mediaURL: "../../static/images/cr7-three.png",
      title: "Video Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
    },
    {
      mediaURL: "../../static/images/cr7-three.png",
      title: "Video Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
    },
    {
      mediaURL: "../../static/images/cr7-three.png",
      title: "Video Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
    },
    {
      mediaURL: "../../static/images/cr7-three.png",
      title: "Video Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit ",
    },
  ]);
  return (
    <div>
      <General>
        <div className="flex flex-direction-row-column mt-10">
          <div className="player-pane-one">
            <TextInputTrans />
          </div>
          <div className="player-pane-two">
            <div className="float-right">
              <Button label="Send Message" />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <PlayerCoachInfo
            imageURL={"../../static/images/cr7-two.png"}
            name="#7 Cristiano Ronaldo"
            biographyData="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit convallis enim. Integer nisl, lorem vel purus  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit convallis enim. Integer nisl, lorem vel purus  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit convallis enim. Integer nisl, lorem vel purus  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbis pellentesque lacinia sit convallis enim. Integer nisl, lorem vel purus"
          />
        </div>
        <div className="mt-10">
          <div className="flex flex-direction-row-column">
            <div className="side-pc-1 flex">
              <div className="w-2/4">
                {dataOne.map((i, index) => {
                  return (
                    <div key={index} className="mt-5">
                      <p className="description plus-jakarta">
                        {i.description}
                      </p>
                      <p className="value plus-jakarta font-bold">{i.value}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-2/4">
                {dataTwo.map((i, index) => {
                  return (
                    <div key={index} className="mt-5">
                      <p className="description plus-jakarta">
                        {i.description}
                      </p>
                      <p className="value plus-jakarta font-bold">{i.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="side-pc-2">
              <div className="flex flex-direction-row-column">
                <div className="equal-sides space-left">
                  <TransparentCard>
                    <div>
                      <p className="card-heading">Current Market Value</p>
                      <div>{/* <img src="" /> */}</div>
                    </div>
                  </TransparentCard>
                </div>
                <div className="equal-sides space-right">
                  <TransparentCard>
                    <div>
                      <p className="card-heading">Season Stats</p>
                      <div className="mt-4 mb-7">
                        {seasonStats.map((i, index) => {
                          return (
                            <div
                              key={index}
                              className="season-stats plus-jakarta mt-1"
                            >
                              {i}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TransparentCard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <PlayerCoachList videoList={videoList} />
        </div>
      </General>
    </div>
  );
};

export default Player;
