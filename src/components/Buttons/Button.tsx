import "./styles.scss";

const Button = ({
  label,
  loading,
  type,
  customedClasses,
  onClick,
}: {
  label: string;
  loading?: boolean;
  type?: any;
  customedClasses?: string;
  onClick?: any;
}): JSX.Element => {
  return (
    <button
      type={type}
      disabled={loading}
      className={
        customedClasses
          ? customedClasses + " button btn-default plus-jakarta active:scale-90"
          : "button btn-default plus-jakarta active:scale-90"
      }
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
