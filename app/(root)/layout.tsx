import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <h1>Root Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
