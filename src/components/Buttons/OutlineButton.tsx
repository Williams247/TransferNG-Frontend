import "./styles.scss";

const Button = ({
  label,
  loading,
  customedClasses,
  ...props
}: any): JSX.Element => {
  return (
    <button
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
