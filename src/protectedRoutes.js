import React from "react";
import Reports from "./Reports";

const protectedRoutes = [
  {
    name: "Reports",
    path: "/reports",
    exact: true,
    main: props => <Reports {...props} />,
    public: false
  }
];

export default protectedRoutes;
