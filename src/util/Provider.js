import React from "react";

import PackageContext from "./Context";

const provider = props => {
  return (
    <PackageContext.Provider
      value={{
        theme: props.theme,
        setTheme: theme => {
          props.setTheme(theme);
        }
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default provider;