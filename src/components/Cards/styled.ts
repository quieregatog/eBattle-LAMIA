import styled from "styled-components";
import { ColorsDesign } from "../../style";

export const StyledCardClasses = styled.div`
  width: 1048px;
  height: 160px;
  margin: 90px auto;
  display: flex;
  align-items: center;
  background: linear-gradient(#ffba08, #d00000);
  border-radius: 8px;
  display: block;
  position: relative;

  legend {
    margin: -10px 10px;
    background-color: ${ColorsDesign.pureWhite};
    width: 200px;
    height: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 10;
    padding: 10px;
  }

  .card {
    z-index: 0;
    position: absolute;
    border-radius: 8px;
    background-color: ${ColorsDesign.pureWhite};
    left: 4px;
    width: 1040px;
    margin: auto;
    height: 152px;
    top: 4px;
    display: flex;
    flex-direction: row;

    .btn-public {
      position: absolute;
      bottom: -18px;
      left: 30px;
      text-align: center;
    }

    .btn-play {
      position: absolute;
      bottom: -25px;
      right: 30px;
    }

    .body-data {
      width: 50%;
      margin-left: 38px;
      height: 90%;
    }

    .data-details {
      height: 80%;
      width: 40%;
      margin: auto;

      .text-detail-card {
        line-height: 0;
        color: ${ColorsDesign.borderTag};
        display: flex;
        height: 12px;

        align-items: center;

        .title-detail {
          color: ${ColorsDesign.font};
          margin-left: 10px;
        }
      }
    }
  }
`;
