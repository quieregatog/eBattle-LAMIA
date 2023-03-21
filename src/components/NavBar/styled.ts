import styled from "styled-components";

export const StyledNavBar = styled.div`
  padding: 30px 48px;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 200;
  }

  .header-full {
    display: flex;
    width: 85%;
    justify-content: space-between;

    .header-nav {
      display: flex;
      justify-content: space-between;
      width: 40%;
    }
  }
`;
