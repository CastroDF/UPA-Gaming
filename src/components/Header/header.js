import styled from "styled-components";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    overflow: hidden;

  .headerShadow {
    -webkit-box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.75);
  }

  .navBar {
    
  }

  @media (min-width: 768px) {
    .navBar {
      display: flex;
      justify-content: space-between;
      width: 60%;
      margin: 1.5rem;
    }
  }

  .navTab {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bangers";
    font-size: 1.5em;
    cursor: pointer;
    color: #82ccdd;
    text-decoration: none;
  }

  .navTab:hover {
    color: #60a3bc;
  }

  .twitch {
    font-size: 1.5em !important;
    color: gray;
  }

  .twitch:hover {
    color: #9147ff;
  }
`;

export default HeaderWrapper;