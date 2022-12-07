import General from "../../layouts/General";
import ProjectPath from "../../components/ProjectPath";
import PageHeading from "../../components/PageHeading";
import DisplayCard from "../../components/Card/DisplayCard";
import Button from "../../components/Buttons/Button";
import jersey from "../../utils/constants/jersey";

const News = () => {
  return (
    <div>
      <General>
        <div>
          <ProjectPath projectPath="Home/Shop" />
          <div className="text-center mt-5">
            <PageHeading title="News" />
          </div>
          <div
            className={`flex flex-col sm:flex-col
            md:flex-col
            lg:flex-row xl:flex-row
            justify-between`}
          >
            <div className="w-full sm:w-full md:w-full lg:w-[68%] xl:w-[68%]">
              <img
                className="w-full rounded-lg"
                src={require("../../static/images/world-cup.jpg")}
                alt="*"
              />
              <div className="mt-5">
                <p className="text-white plus-jakarta text-[20px]">
                  Lorem ipsum commodi sapiente eveniet
                </p>
                <p className="text-white plus-jakarta text-[16px] mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  augue a, feugiat tristique velit. Et suspendisse non ultrices
                  pellentesque laciniasit convallis enim. Integer nisl, lorem
                  vel purus dui, sed nunc eget et. Mauris quam sit malesuada
                  viverra interdum. Nulla ac molestie eget porta. Nunc, nec
                  tempus, rutrum dui, cras. Auctor adipiscing tortor cras tortor
                  diam amet, et. Odio volutpat cras ullamcorper nisl, montes,
                  vitae massa fusce. Vehicula sed ultrices pretium vel diam vel,
                  et. Cras vitae blandit vitae pellentesque in mi feugiat. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue
                  a, feugiat tristique velit. Et suspendisse non ultrices
                  pellentesque lacinia sit convallis enim. Integer nisl, lorem
                  vel purus dui, sed nunc eget et. Mauris quam sit malesuada
                  viverra interdum. Nulla ac molestie eget porta. Nunc, nec
                  tempus, rutrum dui, cras. Auctor adipiscing tortor cras tortor
                  diam amet, et. Odio volutpat cras ullamcorper nisl, montes,
                  vitae massa fusce. Vehicula sed ultrices pretium vel diam vel,
                  et. Cras vitae blandit vitae pellentesque in mi feugiat.
                </p>
                <p className="text-white plus-jakarta text-[16px] mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  augue a, feugiat tristique velit. Et suspendisse non ultrices
                  pellentesque laciniasit convallis enim. Integer nisl, lorem
                  vel purus dui, sed nunc eget et. Mauris quam sit malesuada
                  viverra interdum. Nulla ac molestie eget porta. Nunc, nec
                  tempus, rutrum dui, cras. Auctor adipiscing tortor cras tortor
                  diam amet, et. Odio volutpat cras ullamcorper nisl, montes,
                  vitae massa fusce. Vehicula sed ultrices pretium vel diam vel,
                  et. Cras vitae blandit vitae pellentesque in mi feugiat. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue
                  a, feugiat tristique velit. Et suspendisse non ultrices
                  pellentesque lacinia sit convallis enim. Integer nisl, lorem
                  vel purus dui, sed nunc eget et. Mauris quam sit malesuada
                  viverra interdum. Nulla ac molestie eget porta. Nunc, nec
                  tempus, rutrum dui, cras. Auctor adipiscing tortor cras tortor
                  diam amet, et. Odio volutpat cras ullamcorper nisl, montes,
                  vitae massa fusce. Vehicula sed ultrices pretium vel diam vel,
                  et. Cras vitae blandit vitae pellentesque in mi feugiat.
                </p>
              </div>
            </div>
            <div
              className={`
            w-full sm:w-full md:w-full
            lg:w-[30%] xl:w-[30%] mt-6 sm:mt-6
            md:mt-6 lg:mt-0 xl:mt-0
            `}
            >
              <img
                className="w-full rounded-lg"
                src={require("../../static/images/ball.jpg")}
                alt="*"
              />
              <p className="text-white plus-jakarta mt-2">
                Lorem ipsum commodi sapiente eveniet fugit totam accusantium?
                eveniet fugit totam accusantium? eveniet fugit totam
                accusantium?
              </p>
              <div className="mt-8">
                <img
                  className="w-full rounded-lg"
                  src={require("../../static/images/kick-ball.jpg")}
                  alt="*"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="plus-jakarta subject font-bold px-3">Related news</p>
            <div className="w-full">
              <div
                className={`flex flex-col sm:flex-col
          md:flex-col lg:flex-row xl:flex-row
          flex-wrap justify-evenly
          `}
              >
                {jersey.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full sm:w-full md:w-full lg:w-[31%] xl:w-[31%] mt-5"
                    >
                      <DisplayCard
                        imageUrl={data.imageUrl}
                        title={"News title"}
                        content={data.content}
                        noButton={true}
                        cardType="first-card"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <Button
                label="See More"
                customedClasses="w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12"
              />
            </div>
          </div>
        </div>
      </General>
    </div>
  );
};

export default News;
