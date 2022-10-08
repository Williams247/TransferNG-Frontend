import { useEffect } from "react";
const Auth = ({ children }: { children: JSX.Element }): JSX.Element => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="auth-layout">
      <div className="py-20 px-10 sm:px-10 md:container lg:container xl:container">
        {children}
      </div>
    </div>
  );
};

export default Auth;
