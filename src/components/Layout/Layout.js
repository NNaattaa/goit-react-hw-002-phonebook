import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 8rem;
  max-width: 50rem;
`;

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
