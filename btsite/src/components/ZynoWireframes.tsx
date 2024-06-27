import React from "react";
import styled from "styled-components";
import { OpenLightboxProps } from "./SharedStyles";

const lofiHome1Src = require("../assets/Zyno/LofiHome1.webp");
const lofiHome2Src = require("../assets/Zyno/LofiHome2.webp");
const hifiHomeV1Src = require("../assets/Zyno/HifiHomeV1.webp");
const hifiLoginV1Src = require("../assets/Zyno/HifiLoginV1.webp");
const hifiLinkV1Src = require("../assets/Zyno/HifiLinkV1.jpg");
const hifiListingsV1Src = require("../assets/Zyno/HifiListingsV1.webp");
const hifiPostV1Src = require("../assets/Zyno/HifiPostV1.webp");
const hifiPostEditV1Src = require("../assets/Zyno/HifiPostEditV1.jpg");
const hifiTiktokV1Src = require("../assets/Zyno/HifiTiktokV1.jpg");
const hifiPublishedV1Src = require("../assets/Zyno/HifiPublishedV1.jpg");
const hifiHomeV2Src = require("../assets/Zyno/HifiHomeV2.webp");
const hifiLoginV2Src = require("../assets/Zyno/HifiLoginV2.webp");
const hifiLinkV2Src = require("../assets/Zyno/HifiLinkV2.webp");
const hifiListingsV2Src = require("../assets/Zyno/HifiListingsV2.webp");
const hifiPostV2Src = require("../assets/Zyno/HifiPostV2.webp");
const hifiPostEditV2Src = require("../assets/Zyno/HifiPostEditV2.webp");
const hifiTiktokV2Src = require("../assets/Zyno/HifiTiktokV2.webp");
const hifiPublishedV2Src = require("../assets/Zyno/HifiPublishedV2.webp");

const MobileWireframes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 40px;
`;

const WireframeContainer = styled.div `
    width: 381px;
    height: 542px;
`;

const MobileWireframe = styled.img`
    width: auto;
    height: 540px;
    margin-top: 1px;
`;

const Duo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex: 1;
    flex-wrap: wrap;
    gap: 40px;
`;

const WhiteBgWireframe = styled(MobileWireframe)`
    border: 1px solid #262626;
    margin-top: 0;
`;

const WireframesContainer = styled.div`
    margin: 20px calc((-100vw + 20px) / 6 - 20px);
    padding: 40px calc((100vw - 20px) / 6 + 20px);
    background-color: #EFBC9D;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const LofiContainer = styled(MobileWireframes)`
    margin: 20px calc((-100vw + 20px) / 6 - 20px);
    padding: 40px calc((100vw - 20px) / 6 + 20px);
    background-color: #4359CC;
`;

export const LofiWireframes = (props: OpenLightboxProps) => {
    return <LofiContainer>
        <img src={lofiHome1Src} alt='First Low-Fidelity Homepage presented to Zyno Founder' onClick={() => props.openLightbox(lofiHome1Src, 'First Low-Fidelity Homepage presented to Zyno Founder')} />
        <img src={lofiHome2Src} alt='Second Low-Fidelity Homepage presented to Zyno Founder' onClick={() => props.openLightbox(lofiHome2Src, 'Second Low-Fidelity Homepage presented to Zyno Founder')} />
    </LofiContainer>
}

export const ZynoHifiWireframes = (props: OpenLightboxProps) => {
    return <WireframesContainer>
        <MobileWireframes>
            <Duo>
                <WireframeContainer><MobileWireframe src={hifiHomeV1Src} alt='High-Fidelity Homepage approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiHomeV1Src, 'High-Fidelity Homepage approved by and presented to Zyno Founder')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiLoginV1Src} alt='High-Fidelity Login Page approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiLoginV1Src, 'High-Fidelity Login Page approved by and presented to Zyno Founder')} /></WireframeContainer>
            </Duo>
            <Duo>
                <WireframeContainer><WhiteBgWireframe src={hifiLinkV1Src} alt='High-Fidelity Link Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiLinkV1Src, 'High-Fidelity Link Screen approved by and presented to Zyno Founder')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiListingsV1Src} alt='High-Fidelity Listings Page approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiListingsV1Src, 'High-Fidelity Listings Page approved by and presented to Zyno Founder')} /></WireframeContainer>
            </Duo>
        </MobileWireframes>
        <MobileWireframes>
            <Duo>
                <WireframeContainer><MobileWireframe src={hifiPostV1Src} alt='High-Fidelity Post Page approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiPostV1Src, 'High-Fidelity Post Page approved by and presented to Zyno Founder')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiPostEditV1Src} alt='High-Fidelity Edit Post Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiPostEditV1Src, 'High-Fidelity Edit Post Screen approved by and presented to Zyno Founder')} /></WireframeContainer>
            </Duo>
            <Duo>
                <WireframeContainer><WhiteBgWireframe src={hifiTiktokV1Src} alt='High-Fidelity Posting to Tiktok Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiTiktokV1Src, 'High-Fidelity Tiktok Screen approved by and presented to Zyno Founder')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiPublishedV1Src} alt='High-Fidelity Published Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiPublishedV1Src, 'High-Fidelity Published Screen approved by and presented to Zyno Founder')} /></WireframeContainer>
            </Duo>
        </MobileWireframes>
    </WireframesContainer>
}

export const HifiWireframes = (props: OpenLightboxProps) => {
    return <WireframesContainer>
        <MobileWireframes>
            <Duo>
                <WireframeContainer><MobileWireframe src={hifiHomeV2Src} alt='Final High-Fidelity Homepage' onClick={() => props.openLightbox(hifiHomeV2Src, 'Final High-Fidelity Homepage')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiLoginV2Src} alt='Final High-Fidelity Login Page' onClick={() => props.openLightbox(hifiLoginV2Src, 'Final High-Fidelity Login Page')} /></WireframeContainer>
            </Duo>
            <Duo>
                <WireframeContainer><WhiteBgWireframe src={hifiLinkV2Src} alt='Final High-Fidelity Link Screen' onClick={() => props.openLightbox(hifiLinkV2Src, 'Final High-Fidelity Link Screen')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiListingsV2Src} alt='Final High-Fidelity Listings Page' onClick={() => props.openLightbox(hifiListingsV2Src, 'Final High-Fidelity Listings Page')} /></WireframeContainer>
            </Duo>
        </MobileWireframes>
        <MobileWireframes>
            <Duo>
                <WireframeContainer><MobileWireframe src={hifiPostV2Src} alt='Final High-Fidelity Post Page' onClick={() => props.openLightbox(hifiPostV2Src, 'Final High-Fidelity Post Page')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiPostEditV2Src} alt='Final High-Fidelity Edit Post Screen' onClick={() => props.openLightbox(hifiPostEditV2Src, 'Final High-Fidelity Edit Post Screen')} /></WireframeContainer>
            </Duo>
            <Duo>
                <WireframeContainer><WhiteBgWireframe src={hifiTiktokV2Src} alt='Final High-Fidelity Posting to Tiktok Screen' onClick={() => props.openLightbox(hifiTiktokV2Src, 'Final High-Fidelity Tiktok Screen')} /></WireframeContainer>
                <WireframeContainer><MobileWireframe src={hifiPublishedV2Src} alt='Final High-Fidelity Published Screen' onClick={() => props.openLightbox(hifiPublishedV2Src, 'Final High-Fidelity Published Screen')} /></WireframeContainer>
            </Duo>
        </MobileWireframes>
    </WireframesContainer>
}