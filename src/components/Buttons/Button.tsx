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
  type?: "button" | "submit";
  customedClasses?: string;
  onClick?: (e: any) => void;
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
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
