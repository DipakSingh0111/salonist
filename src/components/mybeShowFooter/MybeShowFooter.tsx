import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MybeShowFooter = ({ children }: { children: React.ReactNode }) => {
  const [footer, setFooter] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const hiddenFooterPaths = ["/forgetPassword", "/login", "/register"];
    if (hiddenFooterPaths.includes(location.pathname)) {
      setFooter(false);
    } else {
      setFooter(true);
    }
  }, [location]);
  return (
    <>
      <div>{footer && children}</div>
    </>
  );
};

export default MybeShowFooter;
