import "./styles.scss";

interface TransparentCardProps {
  children: JSX.Element;
  className?: string;
}

const TransparentCard = ({
  children,
  className,
}: TransparentCardProps): JSX.Element => {
  return (
    <div className={`transparent-card px-5 py-4 w-full ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default TransparentCard;
