import React from "react";
import styled from "styled-components";

const lofiHomeMobile = require("../assets/AmiLofiHomeMobile.jpg");
const lofiProjectsMobile = require("../assets/AmiLofiProjectsMobile.jpg");
const lofiProjectMobile = require("../assets/AmiLofiProjectMobile.jpg");
const lofiPatternMobile = require("../assets/AmiLofiPatternMobile.jpg");
const lofiHomeDesktop = require("../assets/AmiLofiHomeDesktop.jpg");
const lofiProjectsDesktop = require("../assets/AmiLofiProjectsDesktop.jpg");
const lofiProjectDesktop = require("../assets/AmiLofiProjectDesktop.jpg");
const lofiPatternDesktop = require("../assets/AmiLofiPatternDesktop.jpg");

const LofiMobile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const LofiMobileImage = styled.img`
    width: 250px;
    height: auto;
    border: 1px solid #242433;
`;

const LofiDesktop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;

const LofiDesktopImage = styled.img`
    width: calc(50% - 20px);
    height: auto;
`;

export const LofiWireframes = () => {
    return (
        <>
            <LofiMobile>
                <LofiMobileImage src={lofiHomeMobile} alt="Lofi Home Mobile" />
                <LofiMobileImage src={lofiProjectsMobile} alt="Lofi Projects Mobile" />
                <LofiMobileImage src={lofiProjectMobile} alt="Lofi Project Mobile" />
                <LofiMobileImage src={lofiPatternMobile} alt="Lofi Pattern Mobile" />
            </LofiMobile>
            <LofiDesktop>
                <LofiDesktopImage src={lofiHomeDesktop} alt="Lofi Home Desktop" />
                <LofiDesktopImage src={lofiProjectsDesktop} alt="Lofi Projects Desktop" />
            </LofiDesktop>
            <LofiDesktop>
                <LofiDesktopImage src={lofiProjectDesktop} alt="Lofi Project Desktop" />
                <LofiDesktopImage src={lofiPatternDesktop} alt="Lofi Pattern Desktop" />
            </LofiDesktop>
        </>
    );
}