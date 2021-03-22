import styled from "styled-components";
import colorsPalette from "styles/colorsPalette";

const BeUPAWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 1rem;
  right: 2rem;
  border-radius: 1.25rem;
  height: 2.5rem;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
  background: linear-gradient(to right, #0072ff, #00c6ff);
  padding-left: 3rem;
  padding-right: 3rem;
  cursor: pointer;

  .beUPAMessage {
    color: ${colorsPalette.white};
    font-size: 1em;
    font-family: "Bangers";
  }
`;

export default BeUPAWrapper;
