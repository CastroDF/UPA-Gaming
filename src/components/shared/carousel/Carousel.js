import styled from "styled-components";
import colorsPalette from "styles/colorsPalette";

const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 2rem !important;

    .styledCarousel {
        padding-bottom: 2rem !important;
    }

    .arrowButton {
        position: absolute;
        top: 38%;
        width: 50px;
        height: 50px;
        background-color: ${colorsPalette.white};
        border-radius: 50%;
        border: none;
        z-index: 10;
    }

    .arrowButton:hover {
        box-shadow: 0 0 25px 0 ${colorsPalette.white};
    }

    .arrowButton:focus {
        outline: 1px;
    }

    .left {
        left: 20px;
    }

    .right {
        right: 20px;
    }

    .disabledButton {
        display: none
    }

    .arrowIcon {
        color: ${colorsPalette.red};
        font-size: 2em;
    }
`;

export default CarouselWrapper;

