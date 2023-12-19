import styled from "styled-components";

const GridGifImage = styled.td`
  img {
    margin-block: -8px;
    margin-inline: -12px;
  }
`;
const GridUserTheme = styled.td`
  div {
    display: flex;
    align-items: center;
  }
  img {
    border-radius: 50%;
    margin-right: 10px;
  }
`;
const GridVerified = styled.td`
  svg {
    height: 32px;
    width: 32px;
  }
`;

export { GridGifImage, GridUserTheme, GridVerified };
