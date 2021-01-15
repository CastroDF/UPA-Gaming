import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled, { css } from "styled-components";
import "./style.css";
import Maestria7 from "../../assets/Maestria7.png";

const boxShadow = css`
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
`;

const CardContainer = styled.div`
    position: relative;
    width: 17rem;
    height: 25rem;
    padding: 0;
    margin: 0;
    transition: all 0.5s ease-out;
    &:hover {
        transform: translateY(-1rem);
    }
`;

const CardBody = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    will-change: transform, opacity;
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0);
    transition: all 0.4s ease-out;
    ${CardContainer}:hover & {
        ${boxShadow}
    }
`;

const ElevatedImage = styled.img`
    position: absolute;
    z-index: 20;
    width: 3rem;
    height: 3rem;
    top: -2rem;
    transition: top ease 0.8s;
    ${CardContainer}:hover & {
        top: -2.8rem;
    }
`;

const PlayerCard = ({ card }) => {
    const [flipped, set] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <CardContainer
            onClick={() => set(state => !state)}
        >
            <CardBody style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <div className="imageContainer">
                    <img
                        className="image"
                        src={card.profileImage && card.profileImage.src}
                        alt={card.profileImage && card.profileImage.alt}
                    />
                </div>
                <div className="description">
                    <ElevatedImage src={Maestria7} alt="Mastery 7" />
                    <h2 className="name">
                        {card.firstName + " " + card.lastName}
                    </h2>
                </div>
            </CardBody>
            <CardBody className="card" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <div className="imageContainer">
                    <img
                        className="image"
                        src={card.champImage && card.champImage.src}
                        alt={card.champImage && card.champImage.alt}
                    />
                </div>
                <div className="description">
                    <ElevatedImage src={Maestria7} alt="Mastery 7" />
                    <h2 className="name">
                        {card.tag}
                    </h2>
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default PlayerCard;
