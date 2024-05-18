import React from "react";
import styled from "styled-components";
import { OpenLightboxProps } from "./SharedStyles";

const lofiDroplist1Src = require("../assets/JCrew/LofiDroplistOp1.jpg");
const lofiDroplist2Src = require("../assets/JCrew/LofiDroplistOp2.jpg");
const lofiListing1Src = require("../assets/JCrew/LofiListingOp1.jpg");
const lofiListing2Src = require("../assets/JCrew/LofiListingOp2.jpg");
const lofiProduct1Src = require("../assets/JCrew/LofiProductOp1.jpg");
const lofiProduct2Src = require("../assets/JCrew/LofiProductOp2.jpg");
const lofiProduct3Src = require("../assets/JCrew/LofiProductOp3.jpg");
const lofiProduct4Src = require("../assets/JCrew/LofiProductOp4.jpg");
const hifiProductNoDroplistSrc = require("../assets/JCrew/HifiProductNoDroplist.jpg");
const hifiListingCreateSrc = require("../assets/JCrew/HifiListingCreate.jpg");
const hifiDroplistsSrc = require("../assets/JCrew/HifiDroplists.jpg");
const hifiOverlaySrc = require("../assets/JCrew/HifiOverlay.jpg");


const DesktopWireframes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px 0;
`;

const DesktopWireframe = styled.img`
    width: calc(50% - 20px);
    height: auto;
    outline: 1px solid #000000;
`;

export const LofiWireframes = (props: OpenLightboxProps) => {
    return <DesktopWireframes>
        <DesktopWireframe src={lofiProduct1Src} alt='J.Crew Low-Fidelity Product Page Option 1' onClick={() => props.openLightbox(lofiProduct1Src, 'J.Crew Low-Fidelity Product Page Option 1')} />
        <DesktopWireframe src={lofiProduct2Src} alt='J.Crew Low-Fidelity Product Page Option 2' onClick={() => props.openLightbox(lofiProduct2Src, 'J.Crew Low-Fidelity Product Page Option 2')}/>
        <DesktopWireframe src={lofiProduct3Src} alt='J.Crew Low-Fidelity Product Page Option 3' onClick={() => props.openLightbox(lofiProduct3Src, 'J.Crew Low-Fidelity Product Page Option 3')} />
        <DesktopWireframe src={lofiProduct4Src} alt='J.Crew Low-Fidelity Product Page Option 4' onClick={() => props.openLightbox(lofiProduct4Src, 'J.Crew Low-Fidelity Product Page Option 4')} />
        <DesktopWireframe src={lofiListing1Src} alt='J.Crew Low-Fidelity Listing Page Option 1' onClick={() => props.openLightbox(lofiListing1Src, 'J.Crew Low-Fidelity Listing Page Option 1')} />
        <DesktopWireframe src={lofiListing2Src} alt='J.Crew Low-Fidelity Listing Page Option 2' onClick={() => props.openLightbox(lofiListing2Src, 'J.Crew Low-Fidelity Listing Page Option 2')} />
        <DesktopWireframe src={lofiDroplist1Src} alt='J.Crew Low-Fidelity Droplist Page Option 1' onClick={() => props.openLightbox(lofiDroplist1Src, 'J.Crew Low-Fidelity Droplist Page Option 1')} />
        <DesktopWireframe src={lofiDroplist2Src} alt='J.Crew Low-Fidelity Droplist Page Option 2' onClick={() => props.openLightbox(lofiDroplist2Src, 'J.Crew Low-Fidelity Droplist Page Option 2')} />
    </DesktopWireframes>
}

export const HifiWireframes = (props: OpenLightboxProps) => {
    return <DesktopWireframes>
        <DesktopWireframe src={hifiProductNoDroplistSrc} alt='J.Crew High-Fidelity Product Page not Droplisted' onClick={() => props.openLightbox(hifiProductNoDroplistSrc, 'J.Crew High-Fidelity Product Page not Droplisted')} />
        <DesktopWireframe src={hifiListingCreateSrc} alt='J.Crew High-Fidelity Create Listing Page' onClick={() => props.openLightbox(hifiListingCreateSrc, 'J.Crew High-Fidelity Create Listing Page')} />
        <DesktopWireframe src={hifiDroplistsSrc} alt='J.Crew High-Fidelity Droplists Page' onClick={() => props.openLightbox(hifiDroplistsSrc, 'J.Crew Low-Fidelity Droplists Page')} />
        <DesktopWireframe src={hifiOverlaySrc} alt='J.Crew High-Fidelity Overlay' onClick={() => props.openLightbox(hifiOverlaySrc, 'J.Crew High-Fidelity Overlay')} />
    </DesktopWireframes>
}