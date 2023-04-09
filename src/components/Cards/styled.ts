import styled from "styled-components";
import { IStyledComponents } from "../../interface/IGlobal";
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

export const CardAwnsersStyled = styled.div<IStyledComponents>`
  width: 250px;
  height: 820px;
  position: fixed;
  top: 180px;
  background-color: ${ColorsDesign.pureWhite};
  box-shadow: 0 1px 5px rgba(100, 100, 100, 0.5);
  border-radius: 8px;
  left: 0;

  .btn-create {
    margin: 25px auto;
  }

  .awnsers-questions {
    height: 86%;
    overflow-y: scroll;

    ::-webkit-scrollbar-track {
      border: 1px solid ${ColorsDesign.secondary};
      background-color: ${ColorsDesign.pureWhite};
      border-radius: 10px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
      border: 1px solid ${ColorsDesign.secondary};
      background: #f4f4f4;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${ColorsDesign.primary};
    }
  }

  .anwser-card {
    margin: 10px auto;
  }
`;

export const StyledControlCard = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  .open-list {
    transform: translateX(250px);
  }

  .card-list,
  .open-list {
    z-index: 1111111;
  }

  input#openlist-id:checked ~ .card-list {
    transform: translateX(-350px);
  }

  input#openlist-id:checked ~ .open-list {
    transform: translateX(0px);
  }
`;
