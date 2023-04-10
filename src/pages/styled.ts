import styled from "styled-components";

export const PageStyled = styled.div`
  width: 100%;
  display: block;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const ContentEditStyled = styled.div`
  width: 83%;
  margin: auto auto 0;

  .box_content {
    margin: 0 0 67px;
  }

  .information-game .information-data {
    margin: 0;

    &,
    .information-filter {
      display: flex;
      justify-content: space-between;
    }
    .information-filter {
      min-width: 35%;
    }

    .input-mt {
      font-size: 25px;
      width: 400px;
    }
  }

  .question-game {
    height: 750px;

    .question-data {
      margin-top: 20px;
      .input-file {
        margin-top: 75px;
      }

      .data-alternative {
        margin-top: 50px;
      }

      .awnsers-game {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        .awnser {
          margin: 20px 0;
        }
      }
    }
  }
`;
