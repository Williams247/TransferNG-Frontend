import General from "../../layouts/General";
import ProjectPath from "../../components/ProjectPath";
import PageHeading from "../../components/PageHeading";
import DisplayCard from "../../components/Card/DisplayCard";
import Button from "../../components/Buttons/Button";
import jersey from "../../utils/constants/jersey";

const ShopPage = (): JSX.Element => {
  return (
    <div>
      <General>
        <div>
          <ProjectPath projectPath="Home/Shop/Jersey" />
          <div className="text-center mt-5">
            <PageHeading title="Shop" />
          </div>
          <div className="mt-10">
            <p className="plus-jakarta subject font-bold">Jersey</p>
            <div className="w-full">
              <div className="flex flex-wrap justify-center">
                {jersey.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="display-card-container px-5 mt-10"
                    >
                      <DisplayCard
                        imageUrl={data.imageUrl}
                        productName={data.productName}
                        amount={`₦${data.amount}`}
                        content={data.content}
                        star={data.star}
                        cardType="first-card"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <Button label="See More" customedClasses="w-3/12" />
            </div>
          </div>
        </div>
      </General>
    </div>
  );
};

export default ShopPage;
