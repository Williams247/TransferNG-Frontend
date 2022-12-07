import General from "../../layouts/General";
import ProjectPath from "../../components/ProjectPath";
import PageHeading from "../../components/PageHeading";
import DisplayCard from "../../components/Card/DisplayCard";
import "./styles.scss";

const Product = (): JSX.Element => {
  return (
    <div>
      <General>
        <div>
          <ProjectPath projectPath="Home/Shop/Shopping Cart" />
          <div className="text-center mt-10">
            <PageHeading title="Shoping Cart" />
          </div>
          <div className="mt-7">
            <p className="plus-jakarta subject font-bold">Jersey</p>
          </div>
          <div
            className={`flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mt-3 justify-evenly`}
          >
            <div className="w-full sm:w-full md:w-full lg:w-[48%] xl:w-[48%]">
              <img
                className="shop-pic"
                src="https://res.cloudinary.com/dypgr3xyt/image/upload/v1651045851/arsenal_njhkgq.jpg"
                alt="jersey"
              />
            </div>
            <div
              className={`
              w-full sm:w-full md:w-full lg:w-[48%] xl:w-[48%] mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0
            `}
            >
              <DisplayCard
                title="Product name"
                amount={`₦25,000`}
                star={4}
                cardType="last-card"
                content="Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
              />
            </div>
          </div>
        </div>
      </General>
    </div>
  );
};

export default Product;
