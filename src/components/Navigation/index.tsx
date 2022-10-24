import { Link } from "react-router-dom";
import React from "react";
import Space from "../Space";
import Hamburger from "../icons/Hambuger";
import RegisterBtn from "../Buttons/RegisterBtn";
import OutlineButton from "../Buttons/OutlineButton";
import LoginBtn from "../Buttons/LoginBtn";
import "./styles.scss";

interface NavState {
  scrolledPass: boolean;
}

class Navigation extends React.Component<{}, NavState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      scrolledPass: false,
    };
  }
  handleScroll = (): void => {
    const scrollBy: number = 70;
    let body: number = document.body.scrollTop;
    let element: number = document.documentElement.scrollTop;
    if (body > scrollBy || element > scrollBy) {
      this.setState({ scrolledPass: true });
      return;
    }
    this.setState({ scrolledPass: false });
  };
  componentDidMount = (): void => {
    window.addEventListener("scroll", (): void => {
      this.handleScroll();
    });
  };
  componentWillUnmount = (): void => {
    window.removeEventListener("scroll", (): void => {});
  };
  render(): JSX.Element {
    return (
      <div>
        <div
          className={
            this.state.scrolledPass === false
              ? `
                w-full px-10 sm:px-10
                md:px-20 fixed z-10 flex
                sm:flex md:flex lg:hidden
                xl:hidden justify-between pt-9
              `
              : ` dark-background w-full px-10 sm:px-10
                  md:px-20 fixed z-10 flex
                  sm:flex md:flex lg:hidden
                  xl:hidden justify-between pt-9 pb-9
              `
          }
        >
          <div>
            <button className="mt-2">
              <Hamburger />
            </button>
          </div>
          <div className="flex">
            <div>
              <LoginBtn customedClasses="mr-4" label="Log in" />
            </div>
            <div className="float-right">
              <RegisterBtn label="Register" />
            </div>
          </div>
        </div>
        <div
          id="navigation"
          className={
            this.state.scrolledPass === false
              ? "fixed py-3 z-10 w-full hidden sm:hidden md:hidden lg:inline xl:inline"
              : "dark-background fixed py-3 z-10 w-full justify-between hidden sm:hidden md:hidden lg:inline xl:inline"
          }
        >
          <Space>
            <div className="hidden sm:hidden md:flex lg:flex xl:flex sm:flex-col md:flex-col lg:flex-row xl:flex-row">
              <div id="pane-1" className="flex">
                <div className="pr-10">
                  <button className="mt-2">
                    <Hamburger />
                  </button>
                </div>
                <div className="px-10 mt-3">
                  <Link to="/">
                    <button className="plus-jakarta">Home</button>
                  </Link>
                </div>
                <div className="px-10 mt-3">
                  <Link to="/shop">
                    <button className="plus-jakarta">Shop</button>
                  </Link>
                </div>
              </div>
              <div
                id="pane-2"
                className="justify-center hidden sm:hidden md:hidden lg:flex xl:flex"
              >
                <img
                  className="w-full"
                  src={require("../../static/images/nav-image.png")}
                  alt="site symbol"
                />
              </div>
              <div id="pane-3">
                <div className="flex float-right">
                  <div>
                    <LoginBtn customedClasses="mr-4" label="Log in" />
                  </div>
                  <div className="float-right">
                    <RegisterBtn label="Register" />
                  </div>
                </div>
              </div>
            </div>
          </Space>
        </div>
      </div>
    );
  }
}

export default Navigation;
