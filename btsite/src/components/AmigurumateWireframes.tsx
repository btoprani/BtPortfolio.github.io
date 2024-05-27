import React from "react";
import styled from "styled-components";
import { OpenLightboxProps } from "./SharedStyles";

const lofiHomeMobile = require("../assets/Amigurumate/LofiHomeMobile.jpg");
const lofiProjectsMobile = require("../assets/Amigurumate/LofiProjectsMobile.jpg");
const lofiProjectMobile = require("../assets/Amigurumate/LofiProjectMobile.jpg");
const lofiPatternMobile = require("../assets/Amigurumate/LofiPatternMobile.jpg");
const lofiHomeDesktop = require("../assets/Amigurumate/LofiHomeDesktop.jpg");
const lofiProjectsDesktop = require("../assets/Amigurumate/LofiProjectsDesktop.jpg");
const lofiProjectDesktop = require("../assets/Amigurumate/LofiProjectDesktop.jpg");
const lofiPatternDesktop = require("../assets/Amigurumate/LofiPatternDesktop.jpg");
const hifiHomeMobile = require("../assets/Amigurumate/HifiHomeMobile.png");
const hifiProjectsMobile = require("../assets/Amigurumate/HifiProjectsMobile.png");
const hifiProjectMobile = require("../assets/Amigurumate/HifiProjectMobile.png");
const hifiPatternMobile = require("../assets/Amigurumate/HifiPatternMobile.png");
const hifiHomeDesktop = require("../assets/Amigurumate/HifiHomeDesktop.png");
const hifiProjectsDesktop = require("../assets/Amigurumate/HifiProjectsDesktop.png");
const hifiProjectDesktop = require("../assets/Amigurumate/HifiProjectDesktop.png");
const hifiPatternDesktop = require("../assets/Amigurumate/HifiPatternDesktop.png");
const addProjectMobile = require("../assets/Amigurumate/AddProjectMobile.png");
const addProjectDesktop = require("../assets/Amigurumate/AddProjectDesktop.png");
const editLineMobile = require("../assets/Amigurumate/EditLineMobile.png");
const editLineDesktop = require("../assets/Amigurumate/EditLineDesktop.png");

const MobileWireframes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    background-color: #DADDF2;
    padding: 20px 0;
    flex-wrap: wrap;
    gap: 40px;
`;

const MobileWireframe = styled.img`
    width: 250px;
    height: auto;
    border: 1px solid #242433;
`;

const DesktopWireframes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    background-color: #DADDF2;
    padding: 20px 0;
`;

const DesktopWireframe = styled.img`
    width: calc(50% - 20px);
    height: auto;
    @media(max-width: 900px) {
        width: calc(100% - 32px);
    }
`;

const HifiDesktop = styled(DesktopWireframe)`
    border: 1px solid #242433;
`;

const DesktopHifi = styled(DesktopWireframes)`
    background-color: #E9EBF6;
`;

const MobileHifi = styled(MobileWireframes)`
    background-color: #E9EBF6;
`;

export const LofiWireframes = (props: OpenLightboxProps) => {
    return (
        <>
            <MobileWireframes>
                <MobileWireframe src={lofiHomeMobile} alt='Lofi Home Mobile' onClick={() => props.openLightbox(lofiHomeMobile, 'Lofi Home Mobile')} />
                <MobileWireframe src={lofiProjectsMobile} alt='Lofi Projects Mobile' onClick={() => props.openLightbox(lofiProjectsMobile, 'Lofi Projects Mobile')} />
                <MobileWireframe src={lofiProjectMobile} alt='Lofi Project Mobile' onClick={() => props.openLightbox(lofiProjectMobile, 'Lofi Project Mobile')} />
                <MobileWireframe src={lofiPatternMobile} alt='Lofi Pattern Mobile' onClick={() => props.openLightbox(lofiPatternMobile, 'Lofi Pattern Mobile')} />
            </MobileWireframes>
            <DesktopWireframes>
                <DesktopWireframe src={lofiHomeDesktop} alt='Lofi Home Desktop' onClick={() => props.openLightbox(lofiHomeDesktop, 'Lofi Home Desktop')} />
                <DesktopWireframe src={lofiProjectsDesktop} alt='Lofi Projects Desktop' onClick={() => props.openLightbox(lofiProjectsDesktop, 'Lofi Projects Desktop')} />
                <DesktopWireframe src={lofiProjectDesktop} alt='Lofi Project Desktop' onClick={() => props.openLightbox(lofiProjectDesktop, 'Lofi Project Desktop')} />
                <DesktopWireframe src={lofiPatternDesktop} alt='Lofi Pattern Desktop' onClick={() => props.openLightbox(lofiPatternDesktop, 'Lofi Pattern Desktop')} />
            </DesktopWireframes>
        </>
    );
}

export const HifiWireframes = (props: OpenLightboxProps) => {
    return (
        <>
            <MobileHifi>
                <MobileWireframe src={hifiHomeMobile} alt='Hifi Home Mobile' onClick={() => props.openLightbox(hifiHomeMobile, 'Hifi Home Mobile')} />
                <MobileWireframe src={hifiProjectsMobile} alt='Hifi Projects Mobile' onClick={() => props.openLightbox(hifiProjectsMobile, 'Hifi Projects Mobile')} />
                <MobileWireframe src={hifiProjectMobile} alt='Hifi Project Mobile' onClick={() => props.openLightbox(hifiProjectMobile, 'Hifi Project Mobile')} />
            </MobileHifi>
            <MobileHifi>
                <MobileWireframe src={hifiPatternMobile} alt='Hifi Pattern Mobile' onClick={() => props.openLightbox(hifiPatternMobile, 'Hifi Pattern Mobile')} />
                <MobileWireframe src={addProjectMobile} alt='Add Project Mobile' onClick={() => props.openLightbox(addProjectMobile, 'Add Project Mobile')} />
                <MobileWireframe src={editLineMobile} alt='Edit Line Mobile' onClick={() => props.openLightbox(editLineMobile, 'Edit Line Mobile')} />
            </MobileHifi>
            <DesktopHifi>
                <HifiDesktop src={hifiHomeDesktop} alt='Hifi Home Desktop' onClick={() => props.openLightbox(hifiHomeDesktop, 'Hifi Home Desktop')} />
                <HifiDesktop src={hifiProjectsDesktop} alt='Hifi Projects Desktop' onClick={() => props.openLightbox(hifiProjectsDesktop, 'Hifi Projects Desktop')} />
                <HifiDesktop src={hifiProjectDesktop} alt='Hifi Project Desktop' onClick={() => props.openLightbox(hifiProjectDesktop, 'Hifi Project Desktop')}  />
                <HifiDesktop src={hifiPatternDesktop} alt='Hifi Pattern Desktop' onClick={() => props.openLightbox(hifiPatternDesktop, 'Hifi Pattern Desktop')}/>
                <HifiDesktop src={addProjectDesktop} alt='Add Project Desktop' onClick={() => props.openLightbox(addProjectDesktop, 'Add Project Desktop')} />
                <HifiDesktop src={editLineDesktop} alt="Edit Line Desktop" onClick={() => props.openLightbox(editLineDesktop, 'Edit Line Desktop')} />
            </DesktopHifi>
        </>
    );
}