import { useDispatch } from "react-redux";
import { handleOpenModal } from "../../redux/modal";
import "./styles.scss";

interface BtnProps {
  label: string;
  loading?: boolean;
  customedClasses?: boolean;
  props?: any;
}

const Button = ({
  label,
  loading,
  customedClasses,
  ...props
}: BtnProps): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(handleOpenModal())}
      className={
        customedClasses
          ? customedClasses + " button btn-default plus-jakarta active:scale-90"
          : "button btn-default plus-jakarta active:scale-90"
      }
      {...props}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
