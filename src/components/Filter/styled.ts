import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  width: 1048px;
  min-width: 1024px;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  margin: auto;

  .filters {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .top {
      align-items: center;
      width: 65%;

      display: flex;
      justify-content: space-between;
    }
  }

  .results-filter {
    margin: 30px 0;
    justify-content: flex-start;
  }
`;
