import "./styles.scss";

const PageHeading = ({ title }: any): JSX.Element => (
  <div
    className={`spantaran page-heading text-[80px] sm:text-[80px] md:text-[80px] lg:text-[130px]`}
  >
    {title}
  </div>
);
export default PageHeading;
