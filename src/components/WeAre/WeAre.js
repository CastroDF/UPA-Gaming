import styled from "styled-components";
import colorsPalette from "styles/colorsPalette";

const WeAreWrapper = styled.section`
  display: flex;
  height: 75vh;

  .subSection {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .title {
    font-family: "Bangers";
    font-size: 5em;
    margin: 0;
    color: ${colorsPalette.white};
  }

  .subtitle {
    font-family: "Bebas Neue";
    font-size: 1.25em;
    color: ${colorsPalette.white};
  }

  .upaLogo {
    width: 20rem;
    height: 20rem;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
  }
`;

export default WeAreWrapper;
