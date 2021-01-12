import React from "react";
import styled from "@emotion/styled";
import Header from "../custom/AppBar";

const RootLayout = styled.div`
  position: relative;
`;

const Main = styled.main`
  flex: 1;
  min-width: 0;
  z-index: 0;
  padding: 0 2em;
  @media screen and (max-width: 670px) {
    padding: 0 1em;
  }
`;

const Layout = ({ children }) => {
  return (
    <RootLayout>
      <Header />
      <Main>{children}</Main>
    </RootLayout>
  );
};

export default Layout;
