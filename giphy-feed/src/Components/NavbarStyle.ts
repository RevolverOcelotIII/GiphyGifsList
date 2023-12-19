import styled from "styled-components";

const nav_height = "100px";

const Nav = styled.div`
  //background: linear-gradient(to top, #011229 0%, #032c4b 100%);
  background-color: #1d1d1d;
  height: ${nav_height};
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  position: absolute;
  margin-bottom: ${nav_height};
  border-image: linear-gradient(
    90deg,
    rgba(253, 46, 69, 1) 0%,
    rgba(131, 58, 180, 1) 48%,
    rgba(0, 204, 255, 1) 100%
  );
  border-width: 4px;
  border-style: solid;
  border-image-slice: 0 0 1 0;
  z-index: 1;
  > div {
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    margin: 0 20px 0 20px;
    display: flex;
    justify-content: start;
    width: 100%;
    align-items: center;
    @media (max-width: 500px) {
      font-size: 20px;
      justify-content: space-between;
    }
    img {
      height: 120px;
      margin-right: 20px;
    }
  }
`;

export { Nav };
