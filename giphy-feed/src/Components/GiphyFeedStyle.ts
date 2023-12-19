import styled from "styled-components";
import HeaderBackground from "../assets/header-background.jpg";

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 50px;
  padding-top: 120px;
  background: url(${HeaderBackground});
  background-size: auto;
  @media (max-width: 800px) {
    padding: 15px;
    padding-top: 120px;
  }
`;
const FeedHeader = styled.div`
  width: 100%;
  height: 200px;
  background: url(${HeaderBackground});
  background-size: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  color: #fff;
  padding: 20px;
  > h1 {
    font-size: 30px;
    @media (max-width: 800px) {
      font-size: 25px;
    }
  }
  > h3 {
    @media (max-width: 800px) {
      font-size: 15px;
    }
  }
`;

const FeedBody = styled.div`
  .k-cell-inner {
    background-color: #333333;
    color: #fff;
    border: 1px solid #202124;
  }
  .k-table-row .k-table-th {
    background-color: #ddd;
  }
`;

export { Feed, FeedHeader, FeedBody };
