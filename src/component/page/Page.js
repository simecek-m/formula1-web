import React from "react";
import Navigation from "component/navigation/Navigation";
import styled from "styled-components";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Page({ Component }) {
    return (
        <div>
            <Navigation />
            <StyledContent>
                <Component />
            </StyledContent>
        </div>
    )
}

export default Page;