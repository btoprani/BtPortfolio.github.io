import React from "react";
import styled from "styled-components";
import { OpenLightboxProps } from "./SharedStyles";

const lofiHome1Src = require("../assets/Zyno/LofiHome1.webp");
const lofiHome2Src = require("../assets/Zyno/LofiHome2.webp");
const hifiHomeV1Src = require("../assets/Zyno/HifiHomeV1.jpg");
const hifiLoginV1Src = require("../assets/Zyno/HifiLoginV1.jpg");
const hifiLinkV1Src = require("../assets/Zyno/HifiLinkV1.jpg");
const hifiListingsV1Src = require("../assets/Zyno/HifiListingsV1.jpg");
const hifiPostV1Src = require("../assets/Zyno/HifiPostV1.jpg");
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
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 20px 0;
`;

const MobileWireframe = styled.img`
    width: 250px;
    height: auto;
    border: 1px solid #262626;
`;

export const LofiWireframes = (props: OpenLightboxProps) => {
    return <MobileWireframes>
        <img src={lofiHome1Src} alt='First Low-Fidelity Homepage presented to Zyno Founder' onClick={() => props.openLightbox(lofiHome1Src, 'First Low-Fidelity Homepage presented to Zyno Founder')} />
        <img src={lofiHome2Src} alt='Second Low-Fidelity Homepage presented to Zyno Founder' onClick={() => props.openLightbox(lofiHome2Src, 'Second Low-Fidelity Homepage presented to Zyno Founder')} />
    </MobileWireframes>
}

export const ZynoHifiWireframes = (props: OpenLightboxProps) => {
    return <>
        <MobileWireframes>
            <MobileWireframe src={hifiHomeV1Src} alt='High-Fidelity Homepage approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiHomeV1Src, 'High-Fidelity Homepage approved by and presented to Zyno Founder')} />
            <MobileWireframe src={hifiLoginV1Src} alt='High-Fidelity Login Page approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiLoginV1Src, 'High-Fidelity Login Page approved by and presented to Zyno Founder')} />
            <MobileWireframe src={hifiLinkV1Src} alt='High-Fidelity Link Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiLinkV1Src, 'High-Fidelity Link Screen approved by and presented to Zyno Founder')} />
            <MobileWireframe src={hifiListingsV1Src} alt='High-Fidelity Listings Page approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiListingsV1Src, 'High-Fidelity Listings Page approved by and presented to Zyno Founder')} />
        </MobileWireframes>
        <MobileWireframes>
            <MobileWireframe src={hifiPostV1Src} alt='High-Fidelity Post Page approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiPostV1Src, 'High-Fidelity Post Page approved by and presented to Zyno Founder')} />
            <MobileWireframe src={hifiPostEditV1Src} alt='High-Fidelity Edit Post Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiPostEditV1Src, 'High-Fidelity Edit Post Screen approved by and presented to Zyno Founder')} />
            <MobileWireframe src={hifiTiktokV1Src} alt='High-Fidelity Posting to Tiktok Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiTiktokV1Src, 'High-Fidelity Tiktok Screen approved by and presented to Zyno Founder')} />
            <MobileWireframe src={hifiPublishedV1Src} alt='High-Fidelity Published Screen approved by and presented to Zyno Founder' onClick={() => props.openLightbox(hifiPublishedV1Src, 'High-Fidelity Published Screen approved by and presented to Zyno Founder')} />
        </MobileWireframes>
    </>
}

export const HifiWireframes = (props: OpenLightboxProps) => {
    return <>
        <MobileWireframes>
            <MobileWireframe src={hifiHomeV2Src} alt='Final High-Fidelity Homepage' onClick={() => props.openLightbox(hifiHomeV2Src, 'Final High-Fidelity Homepage')} />
            <MobileWireframe src={hifiLoginV2Src} alt='Final High-Fidelity Login Page' onClick={() => props.openLightbox(hifiLoginV2Src, 'Final High-Fidelity Login Page')} />
            <MobileWireframe src={hifiLinkV2Src} alt='Final High-Fidelity Link Screen' onClick={() => props.openLightbox(hifiLinkV2Src, 'Final High-Fidelity Link Screen')} />
            <MobileWireframe src={hifiListingsV2Src} alt='Final High-Fidelity Listings Page' onClick={() => props.openLightbox(hifiListingsV2Src, 'Final High-Fidelity Listings Page')} />
        </MobileWireframes>
        <MobileWireframes>
            <MobileWireframe src={hifiPostV2Src} alt='Final High-Fidelity Post Page' onClick={() => props.openLightbox(hifiPostV2Src, 'Final High-Fidelity Post Page')} />
            <MobileWireframe src={hifiPostEditV2Src} alt='Final High-Fidelity Edit Post Screen' onClick={() => props.openLightbox(hifiPostEditV2Src, 'Final High-Fidelity Edit Post Screen')} />
            <MobileWireframe src={hifiTiktokV2Src} alt='Final High-Fidelity Posting to Tiktok Screen' onClick={() => props.openLightbox(hifiTiktokV2Src, 'Final High-Fidelity Tiktok Screen')} />
            <MobileWireframe src={hifiPublishedV2Src} alt='Final High-Fidelity Published Screen' onClick={() => props.openLightbox(hifiPublishedV2Src, 'Final High-Fidelity Published Screen')} />
        </MobileWireframes>
    </>
}