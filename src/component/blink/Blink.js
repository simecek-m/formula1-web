import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const DEFAULT_ANIMATION_DURATION = 5;

const blinkAnimation = keyframes`
    0% {
        opacity: 0
    }
    50% {
        opacity: 100%
    }
    100% {
        opacity: 0
    }
`

const showAnimation = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 100%
    }
`

const StyledImage = styled.img`
    max-width: 960px;
    opacity: 0;
    animation-name: ${props=> props.last ? showAnimation : blinkAnimation};
    animation-duration: ${props => props.interval? props.interval / 1000 : DEFAULT_ANIMATION_DURATION}s;
`

const StyledText = styled.div`
    font-size: ${props => props.fontSize || "40px"};
    opcaity: 0;
    font-family: Domine;
    color: ${props => props.color || "black"};
    animation-name: ${props=> props.last ? showAnimation : blinkAnimation};
    animation-duration: ${props => props.interval? props.interval / 1000 : DEFAULT_ANIMATION_DURATION}s;
`

function Blink({ content = [] }) {
    const [actual, next] = useState(content[0]);
    const iterator = useRef(0);
    const size = content.length;

    useEffect(() => {
        setTimeout(() => {
            if (iterator.current < size-1) {
                iterator.current = iterator.current+1;
                const nextContent = content[iterator.current];
                next(nextContent);
            }
        }, actual.interval || DEFAULT_ANIMATION_DURATION*1000);
    });
    
    switch (actual.type) {
        case "image": 
            return <StyledImage key={actual.src} src={actual.src} interval={actual.interval} last={iterator.current === size-1 }/>
        default:
            return <StyledText key={actual.text} interval={actual.interval} last={iterator.current === size-1} color={actual.color} fontSize={actual.fontSize}>{actual.text}</StyledText>
    }
}

export default Blink;
