const LayoutCard = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <div className="layout-card">{children}</div>
    </div>
  );
};

export default LayoutCard;
