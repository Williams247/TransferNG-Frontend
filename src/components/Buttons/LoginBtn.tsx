import { useDispatch } from "react-redux";
import { handleOpenModal2 } from "../../redux/modal";
import "./styles.scss";

const Button = ({
  label,
  loading,
  customedClasses,
  ...props
}: any): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(handleOpenModal2())}
      className={
        customedClasses
          ? customedClasses +
            " outline-btn btn-default px-7 plus-jakarta active:scale-90"
          : "outline-btn btn-default px-7 plus-jakarta active:scale-90"
      }
      {...props}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
