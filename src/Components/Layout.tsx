import React from "react";
import { Container } from "./Layout.styles";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return <Container>{children}</Container>;
};

export default Layout;
