import styled from "styled-components";
import colorsPalette from "styles/colorsPalette";

const ScrollToWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 3rem;
  height: 3rem;
  background-color: ${colorsPalette.white};
  border-radius: 3rem;
  cursor: pointer;

  .arrowIcon {
    color: ${colorsPalette.red};
    font-size: 2em;
  }
`;

export default ScrollToWrapper;

