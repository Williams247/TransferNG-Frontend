import { useNavigate } from "react-router-dom";
import { SideMenuList } from "../../../utils/constants/common";
import "./styles.scss";

interface Props {
  handleOpenSideMenu?: () => void;
  open: boolean;
}

const SideBar = ({ handleOpenSideMenu, open }: Props) => {
  const history = useNavigate();
  return (
    <div>
      {open && (
        <div
          onClick={handleOpenSideMenu}
          className={`
          w-full h-full z-30
          bg-[rgba(0,0,0,0.0)] fixed
          bottom-0 right-0
          left-0
        `}
        >
          <div id="side-bar" className="w-[230px] h-full flex justify-center">
            <div className="bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-center">
              <ul className="mt-14">
                {SideMenuList.map((data, index) => {
                  return (
                    <li
                      key={index}
                      className="text-white mt-12 text-[20px] cursor-pointer"
                      onMouseDown={() => history(data.path)}
                    >
                      {data.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
